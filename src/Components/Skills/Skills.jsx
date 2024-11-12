import Header from '../Header/Header'
import './Skills.css'

const Skills = () => {
    const skillsList = [
        {
            id: 1,
            imgUrl: "https://img.icons8.com/bubbles/100/system-administrator-male.png",
            title: "Languages",
            desc: "Faster, better products that your users love. Here's all the services I provide",
            list: [
                "Python",
                "HTML",
                "CSS",
                "JavaScript"
            ]
        },
        {
            id: 2,
            imgUrl: "https://img.icons8.com/bubbles/100/system-administrator-male.png",
            title: "Frameworks & Libraries",
            desc: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
            list: [
                "Bootstrap",
                "MongoDB",
                "Express JS",
                "React JS",
                "Node JS"
            ]
        },
        {
            id: 3,
            imgUrl: "https://img.icons8.com/bubbles/100/system-administrator-male.png",
            title: "Applications I'm fluent in",
            desc: "I design products that are more than pretty. I make them shippable and usable.",
            list: ["VS Code", "Project IDX", "Firebase", "GitHub"]
        }
    ]

    return (
        <div className='bg-skills'>
            <div className="container">
                <div className="row">
                    <Header title="SKILLS" desc="Full-stack developer with a focus on responsive design and innovation." />
                    {
                        skillsList.map(eachItem => {
                            const listElements = eachItem.list
                            return (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="skills-card ">
                                        <img src={eachItem.imgUrl} alt="image" />
                                        <h1 className='skill-title'>{eachItem.title}</h1>
                                        <p className='skill-description'>{eachItem.desc}</p>
                                        <ul>
                                            {
                                                listElements.map(eachElement => <li className='list-element'>{eachElement}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
