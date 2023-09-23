import React from 'react'
import { Button } from '@mui/material'
import './CSS/Login.css'
import logo from './Images/logo.png'
import PinDropIcon from '@mui/icons-material/PinDrop';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popup from 'reactjs-popup'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import TourIcon from '@mui/icons-material/Tour';
import CreateIcon from '@mui/icons-material/Create';
import Children from './Images/Children_playing.png'
import Email from '@mui/icons-material/Email'
import { Link } from "react-router-dom";
import Apply from './Apply'
import Admin from './Admin'
import Attendance from './For_attendance/Attendance'
import Portal from './Parents/Portal'



const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
          to='#'
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
  );
};


const Login = () => {
       const take_me=(e)=>{
            window.location.href='https://goo.gl/maps/NDgvSUWdcj6fkyV19';
            //console.log(e)
        }
       const facebook_find=()=>{
         window.location.href='https://facebook.com'
       }
        const  twitter_find=()=>{
           window.location.href='https://twitter.com';
        }
        const youtube_find=()=>{
           window.location.href='https://www.youtube.com'
        }
        
        const mail_me=(e)=>{
            window.location.href='mailto:basnettulram8@gmail.com'
            e.preventDefault();
          
           
        }
        const show_admin=()=>{
            console.log('hey')
        }

    return (
        <div id='main_of_login'>
            <h1> MidWestPointAcademy </h1>
            
             <div id='front'>
                 
                 <div id='logo'> <img src={logo} alt="" style={{'width':"10rem",'height':'auto'}}/>
                   <h1> <em>  .....in pursuit of academic excellence</em></h1>
                 </div>

                 <Button variant='primary' sx={{ m: 2 }}><PinDropIcon onClick={take_me}></PinDropIcon></Button>
                 <Button variant='primary' sx={{ m: 2 }}><FacebookRoundedIcon  onClick={facebook_find}></FacebookRoundedIcon></Button>
                 <Button variant='primary' sx={{ m: 2 }}><TwitterIcon onClick={twitter_find}></TwitterIcon></Button>
                 <Button variant='primary' sx={{ m: 2 }}><YouTubeIcon onClick={youtube_find}></YouTubeIcon></Button>
                 <Button variant='primary' sx={{ m: 2 }} onClick={mail_me}>
                 <EmailIcon></EmailIcon>
                 </Button>
                 
                 

             </div>

             <div class="navbar">
             
             <div class="dropdown">
               <a class="dropbtn">OUR SCHOOL
                 <ArrowDropDownIcon></ArrowDropDownIcon>
               </a>
               <div class="dropdown-content">
                 <a href="#">WHY OUR SCHOOL ?</a>
                 <a href="#">EMPLOYMENT OPPORTUNITY</a>
                 <a href="#">OUTSTANDING  RESULT</a>
               </div>
             </div> 

             <div class="dropdown">
                <button class="dropbtn">CURRICULUM AND ACADEMICS
                 <ArrowDropDownIcon></ArrowDropDownIcon>
                </button>
               
                <div class="dropdown-content">
                 <a href="#">STANDARD SYLLABUS</a>
                 <a href="#">EFFECTIVE LINK TO HIGHER  STUDIES</a>
                 <a href="#">DAY TO DAY EVALUATION</a>
                </div>
             </div> 

             <div class="dropdown">
               <button class="dropbtn">ADMISSION
               <ArrowDropDownIcon></ArrowDropDownIcon>
               </button>
               <div class="dropdown-content">
               <a href="#">INQUIRE AND VISIT US</a>
               <a href="#">APPLY</a>
               <a href="#">TUTION AND FINANCIAL AID</a>
              </div>
            </div> 

           <div class="dropdown">
               <button class="dropbtn"> SCHOOL LIFE AND EVENTS 
                 <ArrowDropDownIcon></ArrowDropDownIcon>
               </button>
               <div class="dropdown-content">
                 <a href="#">PHOTO GALLERY</a>
                 <a href="#">NEWS AND EVENTS</a>
                 <a href="#">SCHOOL CALENDAR</a>
               </div>
            </div> 

            <div class="dropdown">
                <Popup trigger={<Button class="dropbtn">PARENTS PORTAL</Button>} position="right">
                
                   <Portal/>
                 </Popup>
             </div> 
            
             <div class='dropdown'>
               <Popup trigger={<Button class='dropbtn'>TEACHER PORTAL</Button>}> 
                  <Attendance/>
               </Popup></div>
             
               <div class='dropdown'>
               <Popup trigger={<Button class='dropbtn'>ADMIN PORTAL</Button>}> 
                  <Admin/>
               </Popup>
               </div>

             
           </div>

           <div class='photo'>
             <div id='content_side'>
                     <div> <h1>CLICK ME TO REGISTER </h1></div>
                     <div><Button variant='outlined'>Register</Button> </div>
                      
                     <div id='next'>  
                         
                       <Button id='back_button'variant='contained' ><ArrowBackIcon></ArrowBackIcon></Button> 
                       <Button variant='contained' id='forward_button' ><ArrowForwardIcon></ArrowForwardIcon></Button>
                     
                     
                       </div>

                     
             </div>
            
              <img  
                src="https://ecoleprinceton.org/wp-content/uploads/2021/11/Why-Bilingual-Education.jpg"
                alt="Why-Mid west point academy" id='mid'/>

           </div>

            <div class='after_photo'>
                  <div id='home'><InfoIcon></InfoIcon> About</div>
                  <div  id='visit'> <TourIcon></TourIcon> VISIT  US</div>
                   <Popup trigger={ <div id='apply'><CreateIcon></CreateIcon> APPLY</div>}>
                    <Apply/>
                   </Popup>
                 

                  
            </div>
              
             <div class='con_tent'> <h1>Mid West Point Academy </h1>
             Give your child the distinct academic advantage, creative flexibility and compassionate
             worldview that only a bilingual, multicultural education can provide.
             Expand what's possible at the French American School of Princeton, where children in Preschool (3 years old) through
             Grade 8 develop into vibrant, confident, open-minded students of the world.
             </div>

        <div class='after_content'> 
            
            <div class="container1">
              <img id='image_of_why' src="https://ecoleprinceton.org/wp-content/uploads/2021/11/Preschool-Exceptional-Start.jpg" alt="Snow"/>
              <div class="centered1"> Why this School ?
                 <div id='answer_of_why'>
                   Learning multiple languages in early childhood provides greater opportunities for higher-level thinking, 
                  creative exploration and global understanding.
                  </div>
              </div>
             
            </div>

            <div class="container2">
              <img id='image_of_why' src="https://ecoleprinceton.org/wp-content/uploads/2021/11/Global-Opportunities.jpg" alt="Snow"/>
              
              <div class="centered2">EXCEPTIONAL START 
                 <div  id='answer_of_why'> The FASP Maternelle (Preschool, Pre-K and Kindergarten) fosters children's natural ability to learn new 
                 languages while encouraging students to explore, discover and create.</div>
              </div>

            </div>

          <div class="container3">
             <img id='image_of_why' src={Children} alt="Snow"/>
            <div class="centered3"> GLOBAL OPPORTUNITIES 
                <div  id='answer_of_why'> FASP graduates are critical, independent thinkers and well-rounded global citizens who find success in top international,
                 American and French independent or public schools..</div> 
            </div>
            
          </div>
          
        </div> 
        

           


            <div class='body_for_login'>
                <Button variant='outlined' sx={{ m: 2 }}>ADD</Button>
                <Button variant='outlined' sx={{ m: 2 }}>EDIT</Button>
                <Button variant='outlined' sx={{ m: 2 }}>DELETE</Button>
                <Button variant='outlined' sx={{ m: 2 }}>UPDATE</Button>
                <Button variant='outlined' sx={{ m: 2 }}>Search</Button>
                <Button variant='outlined' sx={{ m: 2 }}>Analytics</Button>
            </div>

            <div class='con_tent'>
            MID WEST POINT ACADEMY IS ONE OF THE TOP INSTITUTE OF WESTERN NEPAL
            PROVIDING HIGH QUALITY EDUCATION THROUGHOUT YEARS.
            A school is an educational institution designed to provide learning spaces and
            learning environments for the teaching of students under the direction of teachers.
            Most countries have systems of formal education, which is sometimes compulsory.
            In these systems, students progress through a series of schools.
            The concept of grouping students together in a centralized location for learning has existed since Classical antiquity.
            Formal schools have existed at least since ancient Greece (see Academy), ancient Rome (see Education in Ancient Rome)
            ancient India (see Gurukul), and ancient China (see History of education in China). The Byzantine Empire had an
            established schooling system beginning at the primary level. According to Traditions and Encounters, the founding of the
            primary education system began in 425 AD and "... military personnel usually had at least a primary education ...". The
            sometimes efficient and often large government of the Empire meant that educated citizens were a must. Although
            Byzantium lost much of the grandeur of Roman culture and extravagance in the process of surviving, the Empire emphasized
            efficiency in its war manuals. The Byzantine education system continued until the empire's collapse in 1453 AD.[12]
            
            In Western Europe, a considerable number of cathedral schools were founded during the
            Early Middle Ages in order to teach future clergy and administrators, with the oldest still existing, and continuously
            operated, cathedral schools being The King's School, Canterbury (established 597 CE), King's School, Rochester
            (established 604 CE), St Peter's School, York (established 627 CE) and Thetford Grammar School (established 631 CE).
            Beginning in the 5th century CE, monastic schools were also established throughout Western Europe, teaching religious
            and secular subjects.

            <p>In Europe, universities emerged during the 12th century; here, scholasticism was an important tool, and the academicians
            were called schoolmen. During the Middle Ages and much of the Early Modern period, the main purpose of schools (as
            opposed to universities) was to teach the Latin language. This led to the term grammar school, which in the United
            States informally refers to a primary school, but in the United Kingdom means a school that selects entrants based on
            ability or aptitude. The school curriculum has gradually broadened to include literacy in the vernacular language and
            technical, artistic, scientific, and practical subjects.
            
            Obligatory school attendance became common in parts of Europe during the 18th century. In Denmark-Norway, this was
            introduced as early as in 1739–1741, the primary end being to increase the literacy of the almue, i.e., the "regular
            people".[13] Many of the earlier public schools in the United States and elsewhere were one-room schools where a single
            teacher taught seven grades of boys and girls in the same classroom. Beginning in the 1920s, one-room schools were
            consolidated into multiple classroom facilities with transportation increasingly provided by kid hacks and school buses.
            
            Islam was another culture that developed a school system in the modern sense of the word. Emphasis was put on knowledge,
            which required a systematic way of teaching and spreading knowledge and purpose-built structures. At first, mosques
            combined religious performance and learning activities. However, by the 9th century, the madrassa was introduced, a
            school that was built independently from the mosque, such as al-Qarawiyyin, founded in 859 CE. They were also the first
            to make the Madrassa system a public domain under Caliph's control.
            
            Under the Ottomans, the towns of Bursa and Edirne became the main centers of learning. The Ottoman system of Külliye, a
            building complex containing a mosque, a hospital, madrassa, and public kitchen and dining areas, revolutionized the
            education system, making learning accessible to a broader public through its free meals, health care, and sometimes free
            accommodation.</p>

              

              </div>
            
            
            <div class='footer'>

                 <div id='about_us'> ABOUT US 
                     <br/>
                     We are the best  institute for delivering QUALITY
                     education which is the foremost WORD OF MOUTH at this moment by anyone.
                     BUT our result shows that we donot need any  proof over the years.
                    
                 </div>

                 <div id='find_us'>FIND US
                   <br />
                    Shantinagar-7,Dang Nepal 
                    Email:MidWestPointAcademy@gmail.com
                  
                  </div>

                 <div id='stay'>STAY CONNECTED
                   <div id='st_ay'>
                  <PinDropIcon id='pin' onClick={take_me}></PinDropIcon>
                  
                  <FacebookRoundedIcon id='face' onClick={facebook_find}></FacebookRoundedIcon>
                  <TwitterIcon id='twitter' onClick={twitter_find}></TwitterIcon>
                  <YouTubeIcon id='youtube'onClick={youtube_find}></YouTubeIcon>
                  <EmailIcon id='email' onClick={mail_me}></EmailIcon>
                   </div> 
                 </div>

            </div>

          



        </div>
    )
}


export default Login;
