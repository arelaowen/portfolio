<template>
  <div id="body">
    <div id="cursor" class="cursor">
      <div class="ring" :style="`transform: translateX(calc(${mouseX}px - 1.25rem)) translateY(calc(${mouseY}px - 1.25rem))`">
        <div><!--Border--></div>
      </div>
      <div class="ring" :style="`transform: translateX(calc(${mouseX}px - 1.25rem)) translateY(calc(${mouseY}px - 1.25rem))`">
        <div><!--Pointer--></div>		
      </div>
    </div>
    <v-app-bar v-if="!isMobile" class="mt-2 mx-6" dense elevation="0" color="transparent" dark id="home"> 
      <v-scroll-x-transition>
      <span v-show="mode.navbar">
        <span class="text-h4">{ }</span>
        <span class="text-caption">wen</span>
      </span>
      </v-scroll-x-transition>
        <v-spacer/>
        <v-scroll-x-reverse-transition>
          <div v-show="mode.navbar">
            <!-- <v-btn class="mr-1" text>Blog</v-btn> -->
            <v-btn class="mr-1" text href="#aboutme">About Me</v-btn>
            <v-btn class="mr-1" text href="#work">Work Experience</v-btn>
            <v-btn class="mr-1" text href="#project">Projects</v-btn>
            <v-btn text href="#contact">Contact</v-btn>
            <v-btn text @click="$router.push({path: '/resume'})">My Resume</v-btn>
          </div>
          </v-scroll-x-reverse-transition>
    </v-app-bar>

    <div class="mt-2 mx-4" v-if="isMobile" id="home">
      <v-scroll-x-transition>
        <span v-show="mode.navbar">
          <span class="text-h4">{ }</span>
          <span class="text-caption">wen</span>
        </span>
      </v-scroll-x-transition>
    </div>
   
    <v-container fluid>
      <v-flex md12 sm12 xs12 row no-gutters>
        <v-flex class="text-center" md6 sm12 xs12 :style="`font-size: ${isMobile ? '40px' : '50px'};`">
            <div class="mt-8">
              <div id="inner-text" :class="isMobile? 'text-right' : ''">

              </div>
              <div id="inner-text1" :class="isMobile? 'text-right' : ''">

              </div>
              <div id="inner-text2" :class="isMobile? 'text-right' : ''">

              </div>
              <div id="inner-text3" :class="isMobile? 'text-right' : ''">

              </div>
              <div id="inner-text4" :class="isMobile? 'text-right' : ''">

              </div>
            </div>
        </v-flex>
        <v-flex md6 sm12 xs12 class="text-body-2">
            <div>
              <code class="pa-0">
                  <pre :class="`my-1 typewriter ${isMobile ? 'float-right' : 'float-left'} `">
                      function showStackSkill(){
                          const skills = [
                              'PHP',
                              'JAVASCRIPT',
                              'NODEJS FRAMEWORKS(VUEJS,REACTJS)',
                              'IONIC(VUEJS)',
                              'NATIVESCRIPT(VUEJS)',
                              'Knoweledge in Repositories',
                              'REST API',
                              'API INTEGRATION',
                              'NODE PLUGINS',
                              'MYSQL',
                              'CLOUD SERVER (eg. Google Cloud)',
                              'Basic Server Troubleshooting',
                              'Application Services',
                              'Basic Knoweledge in .Net',
                              'Basic C#',
                              'Basic Java',
                              'Basic C++',
                              'Basic Python',
                              'CSS',
                              'Knoweledge UI Styling Libraries',
                          ];
                        return skills;
                      }
                      console.log(showStackSkill());
                  </pre>
              </code>
            </div>
        </v-flex>
      </v-flex>
    </v-container>
    <v-container fluid :class="`${isMobile ? 'mt-0 pt-0': 'mt-4'}`">
      <!-- ABOUT ME -->
            <div class="my-2" id="aboutme">
              <v-card-title class="text-h4 pb-10">About Me</v-card-title>
              <v-card-subtitle class="text-h5">Hi, I'm Rafael Owen G. Arela, and I love programming. I enjoy finding smart solutions to tricky problems and always exploring new possibilities in technology.</v-card-subtitle>
              <div>
                <div class="text-center text-h6 pa-2">Educational Background</div>
                <v-flex md12 sm12 xs12 row no-gutters class="ma-0">
                    <v-flex class="pa-2" md6 sm12 xs12 v-for="(item,key) in education" :key="`educ_${key}`">
                      <v-card>
                        <v-card-title>
                          <p>
                            {{item.school}}
                            <v-spacer/>
                          (
                            <span class="success--text">{{item.year}}</span>
                          )
                          </p>
                        </v-card-title>
                        <v-card-subtitle>
                            <i>{{item.address}}</i>
                            <v-spacer/>
                            {{item.level}}
                            <v-spacer/>
                             {{item.course}}
                        </v-card-subtitle>
                      </v-card>
                    </v-flex>
                </v-flex>
              </div>
              <!-- WORK -->
              <div>
                <div class="text-center text-h6 pa-2" id="work">Work Experience</div>
                <v-timeline
                  :dense="$vuetify.breakpoint.smAndDown"
                  
                >
                  <v-timeline-item
                    v-for="(item,key) in work"
                    :key="`work_${key}`"
                    small
                  >
                    <span slot="opposite" class="success--text">{{item.year}}</span>
                    <v-card class="elevation-2">
                      <v-card-title>
                        {{item.company}}
                      </v-card-title>
                      <v-card-subtitle>{{item.position}}</v-card-subtitle>
                      <v-card-text>
                        <ul>
                          <li v-for="item in item.details" :key="item">
                            {{item}}
                          </li>
                        </ul>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline> 
              </div>
              <!-- PROJECTS -->
              <div>
                  <div class="text-center text-h6 pa-2" id="project">My Projects</div>
                  <p class="text-justify">
                    In 3 years time with my current job, I do develop and maintain mostly In-house applications listed below: 
                  </p>
                  <ul class="pb-4">
                    HRIS AND COMPANY PAYROLL SYSTEM (REPLACEMENT FOR OLD SYSTEM)
                    <li class="ml-10">These applications is used for Storing Employee Information, Employee Timekeepig, Payroll Computation and Generation of Reports that provides HR needs.</li>
                    <li class="ml-10">Application is built using CodeIgniter as its backend and VUEJS for its front.</li>
                  </ul>
                  <ul class="pb-4">
                    EMPLOYEE SELF SERVICE PORTAL (REPLACEMENT FOR OLD SYSTEM)
                    <li class="ml-10">The purpose of this application is to allow employees to do task such as filing of leave, etc. that were traditionally handled by HR.</li>
                    <li class="ml-10">Application is built using CodeIgniter as its backend and VUEJS for its front.</li>
                  </ul>
                  <ul class="pb-4">
                    APPLICANT TRACKING SYSTEM(ONBOARDING SYSTEM)
                    <li class="ml-10">The purpose of this application is to give HR facilities to handle the process of job application upto onboarding.</li>
                    <li class="ml-10">Application is built using CodeIgniter as its backend and VUEJS for its front.</li>
                  </ul>
                  <ul>
                    SPOTT(STERLING PAPER ONLINE TIME TRACKER)
                    <li class="ml-10">This is a mobile application for DTR of field employees who are not able to do biometrics.</li>
                    <li class="ml-10">Application is built using Nativescript Vue.</li>
                  </ul>
              </div>
            </div>
    </v-container>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        mouseX: 0,
				mouseY: 0,
        model: null,
        mode: {
          navbar: false,
          name: false
        },
        education: [
          {
            year: '2013-2019',
            school: 'Rizal Technological University',
            level: 'Tertiary',
            address: 'Boni Avenue, Mandaluyong City',
            course: 'Bachelor of Science in Information and Communication Technology' 
          },
          {
            year: '2011-2013',
            school: 'Isaac Lopez Integrated School',
            level: 'Secondary',
            address: 'Ilino Cruz Vergara, Mandaluyong City',
            course: '' 
          },
          {
            year: '2008-2011',
            school: 'Lopez National Comprehensive High School',
            level: 'Secondary',
            address: 'Pan-Philippine Highway, Lopez, Quezon Province',
            course: '' 
          },
          {
            year: '2002-2008',
            school: 'Don Emilio Salumbides Elementary School',
            level: 'Primary',
            address: 'Magsaysay Lopez, Quezon Province',
            course: '' 
          },
        ],
        work: [
          {
            company: "SL AGRITECH CORPORATION",
            position: "Junior Programmer",
            year: "November 2020 - Present",
            details: [
              "Build In-house Web/Standalone Application, Maintenance, Backup and Monitoring of all application.",
              "Support user concern's",
              "Maintain Company Email software",
              "Monthly Reporting and Retrospect"
            ]
          },
          {
            company: "STERLING OPENOVATE",
            position: "Junior Developer",
            year: "March 2020 - May 2020",
            details: [
              "Build Web Application",
              "Maintain/Update Existing Application",
              "Document and create user manual"
            ]
          },
          {
            company: "JINDINGYUAN",
            position: "Data Encoder",
            year: "November 2019 - February 2020",
            details: [
              "Created web domain landing page",
              "Finding domain for sale",
              "Monitor websites daily"
            ]
          },
          {
            company: "AXEIA DEVELOPMENT CORPORATION",
            position: "Sales Management Staff(Internship)",
            year: "April 2018 - July 2018",
            details: [
              "Handles Paper Filings",
              "Provide Clients Assistance"
            ]
          },
          {
            company: "ITECH GLOBAL SOLUTIONS, INC",
            position: "IT Technical Support(Internship)",
            year: "June 2015 - October 2016",
            details: [
              "Provide User/Employee Assistance"
            ]
          },
          {
            company: "Municipality of Mandaluyong",
            position: "IT Technical Support(Internship)",
            year: "June 2015 - September 2015",
            details: [
              "Provide User/Employee Assistance"
            ]
          }
        ],
      }
    },
    created(){
      setTimeout(() => {
        this.mode.navbar = true
      }, 500);
    },
    mounted() {
				document.addEventListener("mousemove", (event) => {
					this.mouseX = event.clientX;
					this.mouseY = event.clientY;
				});
       function drawText(word, id) {
          word = word || 'ZOOM!';
          var wordArray = word.split('');
          var innerTextElement = document.getElementById(id);
          innerTextElement.innerHTML = '';
          innerTextElement.classList.remove('done-animating');
          wordArray.forEach(function (letter, index) {
            var span = document.createElement('span');
            span.textContent = letter;
            span.className = 'letter animate';
            span.style['animation-delay'] = (300 * index) + 'ms';
            innerTextElement.appendChild(span);

            if (index === wordArray.length - 1) {
              span.addEventListener('animationend', function () {
                innerTextElement.classList.add('done-animating');
              });
            }
          });
        }
        
        drawText('HELLO!', 'inner-text');
        drawText('I AM', 'inner-text1');
        drawText('OWEN', 'inner-text2');
        drawText('A', 'inner-text3');
        drawText('DEVELOPER', 'inner-text4');
		},
  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
* {
	font-family: "Poppins", sans-serif;
    font-weight: normal;
}
.cursor {
  position: fixed;
  z-index: 999999;
  pointer-events: none;
}
.cursor div {
  position: absolute;
  display: grid;
  place-items: center;
}
.cursor div div {
  background-color: transparent;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
  box-shadow: 0 0 200px 40px aquamarine;
}
.cursor div:nth-child(1),
.cursor div:nth-child(2) {
  width: 100%;
  height: 100%;
}
.cursor div:nth-child(1) {
  transition: transform 0.2s ease-out;
}
.cursor div:nth-child(2) {
  transition: transform 0.1s ease-out;
}
.cursor div:nth-child(2) div {
  background: #fff;
  border-radius: 50%;
  width: 0px;
  height: 0px;
}
.header {
  font-size: 100px;
}
/* DEMO-SPECIFIC STYLES */
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}

@keyframes dash {
        0% {
          transform: skew(-30deg,0deg) translateX(300%) scale(.8);
          opacity: 1;
        }

        40% {
          transform: skew(10deg,0deg) translateX(100%) scale(.9);
        }

        60% {
          transform: skew(10deg,0deg) translateX(-10px) scale(1.2);
        }

        70% {
          transform: skew(0,0deg) translateX(0) scale(1.3);
        }

        75% {
          transform: skew(0,0deg) translateX(0) scale(1.3);
        }

        90% {
          transform: skew(0,0deg) translateX(0) scale(.85);
        }

        100% {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
      }


      @keyframes done-animating {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(2);
        }

        100% {
          transform: scale(1);
        }
      }

      #inner-text,#inner-text1, #inner-text2,#inner-text3,#inner-text4 {
        position: relative;
        z-index: 1;
      }

      #inner-text.done-animating, #inner-text1.done-animating, #inner-text2.done-animating,#inner-text3.done-animating,#inner-text4.done-animating {
        animation: done-animating 300ms ease-in;
      }

      .letter {
        display: inline-block;
        color: #00ffdd;
        letter-spacing: 30px;
      }

      .letter.animate {
        animation: dash 500ms ease-out forwards;
        opacity: 0;
      }

</style>
