const highlightPattern = /==([^=\n]+)==/g;

function transformTextNodes(nodes) {
  return nodes.flatMap((node) => {
    if (node.type === 'text') {
      const matches = [...node.value.matchAll(highlightPattern)];
      if (matches.length === 0) return [node];

      const transformed = [];
      let offset = 0;
      for (const match of matches) {
        const start = match.index;
        if (start > offset) {
          transformed.push({ type: 'text', value: node.value.slice(offset, start) });
        }
        transformed.push({
          type: 'mark',
          data: { hName: 'mark' },
          children: [{ type: 'text', value: match[1] }],
        });
        offset = start + match[0].length;
      }
      if (offset < node.value.length) {
        transformed.push({ type: 'text', value: node.value.slice(offset) });
      }
      return transformed;
    }

    if (Array.isArray(node.children)) {
      node.children = transformTextNodes(node.children);
    }
    return [node];
  });
}

export default function remarkHighlight() {
  return (tree) => {
    tree.children = transformTextNodes(tree.children);
  };
}
