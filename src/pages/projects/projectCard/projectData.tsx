
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
                    title: 'Gel Permeation Chromatography (GPC) Expansion',
                    text: "Authored a Jupyter Notebook with the intents of proficiency and accessibility for the R&D team. Detailed annotations and instructions allowed the segmented script to query raw data (unavailable through the GPC’s native software) resulting in our being able to newly assess polydispersity indices and number/weight average molecular weights.",
                    techList: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Plotly'],
                    // isVector: false,
                    image: "gpc_example.png",
                    // image: "gpcVector",
                    blob: 'blob_02.png',
                },
                {
                    id: 5,
                    title: 'Mechanical Stress-Strain Testing Automation',
                    text: "Automated a mechanical stress-strain test core to Tempo Therapeutic's manufacturing process. Utilizing Pandas and Tkinter, a GUI allowed users to access and analyze measurements locally, and export calculations immediately to a cloud server. Implementation reduced the analysis period by ~80%.",
                    techList: ['Python', 'Pandas', 'Tkinter', 'Plotly'],
                    image: "stressStrain_example.png",
                    blob: 'blob_03.png',
                },
                {
                    id: 7,
                    title: 'Modular Company-Spec Scraper',
                    text: "Created a web-scraper using Selenium and BS4 in order to compile a list of job openings in certain cities. Given a colleague's criteria (location, size, perks, etc.), the scraper automated collecting summative information for each company throughout BuiltIn's profile pages.",
                    techList: ['Python', 'BeautifulSoup4', 'Selenium', 'Pandas'],
                    image: "synestify_example.png",
                    blob: 'blob_04.png',
                },
                {
                    id: 9,
                    title: 'Venture-Driven Media Direction and Collaboration',
                    text: "Curated and orchestrated media content for our company's data rooms, strategically tailored to bolster venture pitches and product-use demos for collaborative partners. Additionally, Co-authored Instructions For Use (IFU) that was instrumental in a comprehensive human factors study ultimately submitted for FDA review.",
                    techList: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Illustrator'],
                    image: "synestify_example.png",
                    blob: 'blob_05.png',
                },
            ])
}
