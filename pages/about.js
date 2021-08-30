import Header from "../components/Header"
import COnnection from "../components/Conection"
export default function About(){
    return(
    <>
        <div className="Acover">
            <div className="Adiv programming">
                <img className="Ayas" src="/yas.jpg"/>
                <p className="about">
                    I'm full Stack developer who loves to create new program to help world and peope live better. Chalenges are
                    the best point of this path because I can use my mind to solve and learn how to solve real chalenge in my life. Quick and love learner skills helped
                    me be succed in this field.
                </p>
            </div>
            <div className="Adiv travel">
                <img className="Atravel" src="/travel.jpg"/>
                <img className="Atravel1" src="/travel1.jpg"/>
                <p className="about">
                    I'm travel lover who loves to meet more people with different culture to learn about their believe
                    because of that I prefer to work in team. Team working has lots of benifit that can help me to be succed in my job so we can 
                    share our knodlege and help eachother.

                </p>
            </div>
            <div className="Adiv plane">
                <img className="Atravel" src="/plan.jpeg"/>
                <img className="Atravel1" src="/book.jpeg"/>
                <p className="about">
                        My life goes by planing for each day. I have beautiful planning notebook that motivate me to do all my jobs at the correct time. Some events prevent me to follow my day plan but 
                        I have back up plane to do my jobs ontime. One of the best friend that I have is books that help me to growth myself and improve my skills. My quick learning skill help me to learn more stuffs so fast.
                </p>
            </div>
            <div className="Adiv hobby">
                <img className="Atravel" src="/photo.jpeg"/>
                <img className="Atravel1" src="/reading.jpeg"/>
                <p className="about">
                    My hobbys are photographing, riding bycicle, reading book, and hiking. Hobbys are one of the importent 
                    part that help me refresh my mind to start stronger. I work hard to enjoy my life so my hobbys let me to have lots of energy to continue strong.
                </p>
            </div>
        </div>
        <Header active="about"/>
        <COnnection/>
    </>)
}