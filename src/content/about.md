# Publications

[View all publications](/publications/)

## Highlights
- 7+ years of experience.
- Licensed Professional Engineer (PE) in Illinois.
- Skilled in PSCAD, PSS®E, Aspen OneLiner, PowerGEM TARA, CYME, Synergi, Milsoft WindMil, SKM, EasyPower, ETAP, and PSS®CAPE.
- Skilled in developing tools with Rust, Python, and VBA; good knowledge of C, C++, JavaScript, HTML, CSS, and Tailwind CSS.
- Completed 500+ studies, including DER interconnections, reliability, non-wires alternatives, electrification impact, protection and coordination, black start, transient, stability, voltage optimization, distribution automation, FLISR, enhanced lateral protection, grounding, long- and short-term planning, estimation, and scoping studies at both transmission and distribution levels.
- Served utilities including Central Maine Power, Versant Power, NYSEG, United Illuminating, National Grid New York, National Grid Massachusetts, Orange and Rockland, Consolidated Edison, Commonwealth Edison, Ameren Illinois, Ameren Missouri, Georgia Power, Arizona Public Service, and Northern California Power Agency.
- Served renewable energy developers including AES Clean Energy, BrightNight Power, and Geronimo Solar.
- Performed transmission planning studies for clients under NYISO, ISO-NE, MISO, PJM, CAISO, and SPP.

## Leadership experience

- Led and mentored supervisors overseeing interconnection, reliability, protection, and planning studies.
- Oversee a group of 50 engineers working across multiple clients in a highly dynamic environment.
- Participate in and provide subject matter expertise on critical aspects of the planning and studies department.

## Business development experience

- Successfully led proposal and bid efforts to secure large- and small-scale projects for the team. Contributed to technical and commercial sections, participated in bid calls, and coordinated go/no-go decisions with the team.
- Presented capabilities and answered questions for prospective utility and developer clients.
- Established relationships with utilities and expanded into new workstreams by demonstrating technical capabilities and successful delivery, earning client trust.

## Tools

### Data Maintenance Tool

Developed a tool to read AMI data and compare it with the CYME model. When data does not match, the tool corrects load capacity and customer counts in the model. It saves about eight hours of manually reviewing AMI tools and spot loads and is currently used for *confidential utility* studies.

### EOL Tool

Developed a tool that analyzes feeders and identifies end-of-line (EOL) meters used in voltage optimization studies to find electrically distant points across laterals. Work that previously took at least four hours now takes a few minutes. The tool identifies EOL meters using electrical distance and overall feeder impedance, evaluating short-circuit levels and low-voltage points. It is used for ComEd voltage optimization studies.

### DER Analysis Tools

Developed a DER analysis tool to perform load-flow analysis of voltage, thermal, and voltage-change impacts across possible on/off scenarios for DERs on provided feeders. It processes multiple feeders, automating initial analysis and reporting across cases, DERs, and load interconnection points. The tool reduced 16–24 hours of analysis and reporting to minutes. Developed for CMP DER studies, it is now used by utilities whose primary analysis tool is CYME.

### Contingency Translator and Analyzer

Developed a tool to convert contingency files to PTI contingency format and PSS®E-supported Python commands. It performs load flow and detects abnormalities during contingency scenarios, including load or generation islanding, under- and overvoltage, and thermal overloads. This removes the need to apply contingencies manually and helps convert custom contingency databases to a more standard format. Developed for *confidential utility* DER interconnection studies, it is applicable to many types of contingency analysis and reduces hours of analysis and reporting to minutes.

### Contingency Analyzer

Developed a VBA-based tool to simplify reporting and filtering of results from contingency analysis using PSS®E and TARA. It processes N-1 and N-1-1 results, highlights violations against *confidential utility* planning criteria, retrieves previously applied mitigations from the master database, and produces sections of a Word report. It reduced at least 8–16 hours of analysis and reporting to minutes.

### Unified Distribution Planning Tool

Developed a tool to unify distribution planning workflows. Users define a sequence of commands and custom reports to run after each event. It combines Rust for iterative, computation-intensive tasks with Python and CymPy, and can run distribution planning studies, test and optimize mitigations and corrective actions, and produce custom reports after each event.

### Model Scrubber

Developed for National Grid, this tool retrieves data from sources including GIS, AMI, area planning sheets, relay databases, and other equipment databases. It validates data across sources and determines ratings, settings, and locations by applying source priorities and *confidential utility* planning criteria. The results are stored in a single database and used to update CYME models so they consistently represent field information. I led the effort in collaboration with _confidential utility_’s Integrated Planning and Automation team. *The utility* runs the tool monthly to maintain model health.

### GIS Mapper

Integration of planning models with GIS data supports collaboration and information exchange between planning, design, and field teams. Developed by the K&A team, the GIS Mapper converts planning models into GIS-compatible formats such as KML and KMZ.

The tool consolidates the planning model and proposed changes into an intermediate file, then exports a KML or KMZ containing relevant updates, details, and comments. This helps downstream engineering teams work independently and reduces reliance on the planning team.

The intermediate file can also be modified directly to incorporate updates, minimizing back-and-forth between planning and design teams and improving workflow efficiency.
