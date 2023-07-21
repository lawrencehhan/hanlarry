
export default function ProjectData() {
    return ([
                {
                    id: 1,
                    title: "Synestify",
                    text: "Synestify is a web-app that analyzes an uploaded image and user-preferences to recommend curated songs that reflect the image's visual cues. The analysis matches tone, hue, brightness, user-data, etc. to musical values accepted by Spotify's public API to utilize its recommendation engine.",
                    techList: ['ReactJS', 'Python', 'Flask', 'Pandas', 'Scikit-learn', 'Plotly', 'Spotify API'],
                    image: "synestify_example.png",
                    blob: "blob_01.png",
                    link: "https://github.com/lawrencehhan/synestify",
                },
                {
                    id: 3,
                    title: 'Gel Permeation Chromatography (GPC) R&D Expansion',
                    text: "Authored an extensively annotated Jupyter Notebook to enhance proficiency and accessibility for the R&D team. The notebook enabled segmented scripts to query previously unavailable raw data from the GPC's native software, allowing comprehensive assessments of polydispersity indices and number/weight average molecular weights.",
                    techList: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Plotly'],
                    // isVector: false,
                    image: "gpc_example.png",
                    // image: "gpcVector",
                    blob: 'blob_02.png',
                },
                {
                    id: 5,
                    title: 'Mechanical Stress-Strain Testing System Automation',
                    text: "Automated a mechanical stress-strain test system critical to Tempo Therapeutic's manufacturing process. Created a user-friendly GUI using Pandas and Tkinter, enabling efficient access, local analysis, and seamless export of measurements to a cloud server. The successful implementation led to an ~80% reduction in the analysis period.",
                    techList: ['Python', 'Pandas', 'Tkinter', 'Plotly'],
                    image: "stressStrain_example.png",
                    blob: 'blob_03.png',
                },
                {
                    id: 7,
                    title: 'Modular Company-Spec Scraper',
                    text: "Developed a custom web scraping tool utilizing Selenium and BS4 to curate a targeted list of job openings in specific cities. The tool efficiently gathered comprehensive company information based on colleague-defined criteria (location, size, perks, etc.), extracted from BuiltIn's profile pages.",
                    techList: ['Python', 'BeautifulSoup4', 'Selenium', 'Pandas'],
                    image: "synestify_example.png",
                    blob: 'blob_04.png',
                },
                {
                    id: 9,
                    title: 'Venture-Driven Media Direction and Collaboration',
                    text: "Designed and orchestrated media content for our company's data rooms, strategically tailored to bolster venture pitches and product-use demos for collaborative partners. Additionally, Co-authored Instructions For Use (IFU) that was instrumental in a comprehensive human factors study ultimately submitted for FDA review.",
                    techList: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Illustrator'],
                    image: "synestify_example.png",
                    blob: 'blob_05.png',
                },
            ])
}
