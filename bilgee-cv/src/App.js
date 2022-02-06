import './css/aos.css';
import './css/bootstrap.min.css';
import './css/main.css';
import a2 from "./images/a2.jpg";
import a5 from "./images/a (5).jpg";
import a3 from "./images/a (3).jpg";
import a4 from "./images/a (4).jpg";
import b from "./images/b.jpg";
import b2 from "./images/b (2).jpg";
import b3 from "./images/b (3).jpg";
import b4 from "./images/b (4).jpg";
import c from "./images/c.jpg";
import c2 from "./images/c (2).jpg";
import c3 from "./images/c (3).jpg";
import c4 from "./images/c (4).jpg";

function App() {
  return (
    <>
     <body id="top">
    <div class="page-content">
      <div>
        <div class="profile-page">
          <div class="wrapper">
            <div class="page-header page-header-small">
              <div
                class="page-header-image"
                data-parallax="true"
                style={{'background-image': 'url(./images/4.jpg)'}}
              ></div>
              <div class="container">
                <div class="content-center">
                  <div class="cc-profile-image">
                    <a href="#"><img src={a2} alt="" /></a>
                  </div>
                  <div class="h2 title">Damjin Bilegsaikhan</div>
                  <p class="category text-white">
                    Done is better than perfect
                  </p>
                 <a
                    class="btn btn-primary"
                    href="Bilegsaikhan.pdf"
                    data-aos="zoom-in"
                    data-aos-anchor="data-aos-anchor"
                    >Download CV</a
                  >
                </div>
              </div>
              <div class="section">
                <div class="container">
                  <div class="button-container">
                    <a
                      class="btn btn-default btn-round btn-lg btn-icon"
                      href="#"
                      rel="tooltip"
                      title="Follow me on Facebook"
                      ><i class="fa fa-facebook"></i></a>
                      <a
                      class="btn btn-default btn-round btn-lg btn-icon"
                      href="#"
                      rel="tooltip"
                      title="Follow me on Twitter"
                      ><i class="fa fa-twitter"></i></a><a
                      class="btn btn-default btn-round btn-lg btn-icon"
                      href="#"
                      rel="tooltip"
                      title="Follow me on Google+"
                      ><i class="fa fa-google-plus"></i></a
                    ><a
                      class="btn btn-default btn-round btn-lg btn-icon"
                      href="#"
                      rel="tooltip"
                      title="Follow me on Instagram"
                      ><i class="fa fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="about">
          <div class="container">
            <div class="card" data-aos="fade-up" data-aos-offset="10">
              <div class="row">
                <div class="col-lg-6 col-md-12">
                  <div class="card-body">
                    <div class="h4 mt-0 title">About</div>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                      Сайн байна уу, Миний CV-тэй танилцаж байгаад баярлалаа.
                    
                      Билэгсайхан миний бие бусадтай харилцах, хамтран ажиллах тал дээр нээлттэй, нийтэч
                      хүмүүжил болон төлөвшил сайтай бусад залуучуудтай адил амьдралын төлөө чадах бүхнээ хийж байгаа жирийн залуу 
                      эхнэртэй, одоогоор хүүхэдгүй, ирээдүйд маш том зорилготой, түүнийхээ төлөө тасралтгүй хичээж байгаа ч  Алдаж оносон түүх ихтэй
                      , хийсэн бүтээсэн зүйл багатай залуу үеийн төлөөлөл байна. Баярлалаа
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="card-body">
                    <div class="h4 mt-0 title">Basic Information</div>
                    <div class="row">
                      <div class="col-sm-4">
                        <strong class="text-uppercase">Age:</strong>
                      </div>
                      <div class="col-sm-8">25</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-4">
                        <strong class="text-uppercase">Email:</strong>
                      </div>
                      <div class="col-sm-8">Bilegsaikhan.py@gmail.com</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-4">
                        <strong class="text-uppercase">Phone:</strong>
                      </div>
                      <div class="col-sm-8">8901-1219</div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-4">
                        <strong class="text-uppercase">Address:</strong>
                      </div>
                      <div class="col-sm-8">
                        Bayangol, 19-r khoroo, Ulaanbaatar
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-sm-4">
                        <strong class="text-uppercase">Status:</strong>
                      </div>
                      <div class="col-sm-8">Freelancer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="skill">
          <div class="container">
            <div class="h4 text-center mb-4 title">Professional Skills</div>

            <div
              class="card"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="progress-container progress-primary">
                      <span class="progress-badge">Sales managment &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><a class="small">The goal is to improve</a>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary"
                          data-aos="progress-full"
                          data-aos-offset="10"
                          data-aos-duration="2000"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{'width': '50%'}}
                        ></div>
                        <span class="progress-value">50%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="progress-container progress-primary">
                      <span class="progress-badge">Communication</span>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary"
                          data-aos="progress-full"
                          data-aos-offset="10"
                          data-aos-duration="2000"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{'width': '90%'}}
                        ></div>
                        <span class="progress-value">90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="progress-container progress-primary">
                      <span class="progress-badge">COMPUTER KNOWLEDGE</span>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary"
                          data-aos="progress-full"
                          data-aos-offset="10"
                          data-aos-duration="2000"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{'width': '99%'}}
                        ></div>
                        <span class="progress-value">99%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="progress-container progress-primary">
                      <span class="progress-badge">Financial modeling</span>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary"
                          data-aos="progress-full"
                          data-aos-offset="10"
                          data-aos-duration="2000"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{'width': '80%'}}
                        ></div>
                        <span class="progress-value">80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="progress-container progress-primary">
                      <span class="progress-badge">self managment</span>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary"
                          data-aos="progress-full"
                          data-aos-offset="10"
                          data-aos-duration="2000"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{'width': '75%'}}
                        ></div>
                        <span class="progress-value">75%</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="progress-container progress-primary">
                      <span class="progress-badge">web-development Front end</span>
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-primary"
                          data-aos="progress-full"
                          data-aos-offset="10"
                          data-aos-duration="2000"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{'width': '70%'}}></div>
                        <span class="progress-value">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="portfolio">
          <div class="container">
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto">
                <div class="h4 text-center mb-4 title">Portfolio</div>
                <div class="nav-align-center">
                  <ul class="nav nav-pills nav-pills-primary" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#web-development"
                        role="tablist"
                        ><i class="fa fa-laptop" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#graphic-design"
                        role="tablist"
                        ><i class="fa fa-picture-o" aria-hidden="true"></i></a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#Photography"
                        role="tablist"
                        ><i class="fa fa-camera" aria-hidden="true"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-content gallery mt-5">
              <div class="tab-pane active" id="web-development">
                <div class="ml-auto mr-auto">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        
                          <figure class="cc-effect">
                            <img src={a5} alt=""/>
                            <figcaption>
                              <div class="h4">Research Conference</div>
                              <p>For development of Hydrology</p>
                            </figcaption>
                          </figure>
                        
                      </div>
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                          <figure class="cc-effect">
                            <img src={a2} alt="" />
                            <figcaption>
                              <div class="h4">Research Conference</div>
                              <p>For development of Student</p>
                            </figcaption>
                          </figure>
                      </div>
                    </div>
                    <div class="col-md-6" >
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        style={{'width': '50%'}} >
                        <a>
                          <figure class="cc-effect" >
                            <img src={a3} alt="" />
                            <figcaption>
                              <div class="h4">The first responsible job</div>
                              <p>Arvain Undes Beverage LLC</p>
                            </figcaption>
                          </figure></a>
                      </div>
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a>
                          <figure class="cc-effect">
                            <img src={a4} alt="" />
                            <figcaption>
                              <div class="h4">The first Team Leader job</div>
                              <p>EUROPLAST LLC</p>
                            </figcaption>
                          </figure></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="graphic-design" role="tabpanel">
                <div class="ml-auto mr-auto">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a href="#graphic-design">
                          <figure class="cc-effect">
                            <img
                              src={b}
                              alt=""
                            />
                            <figcaption>
                              <div class="h4">With my Angel</div>
                              <p>Somewhere in Mongolia</p>
                            </figcaption>
                          </figure>
                          </a>
                      </div>
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a href="#graphic-design">
                          <figure class="cc-effect">
                            <img
                              src={b2}
                              alt=""
                            />
                            <figcaption>
                              <div class="h4">I thought I would succeed</div>
                              <p>Somewhere in Mongolia</p>
                            </figcaption>
                          </figure></a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                     style={{'width': '70%'}} >
                        <a href="#graphic-design">
                          <figure class="cc-effect">
                            <img
                              src={b3}
                              alt=""
                            />
                            <figcaption>
                              <div class="h4">The world began to feel interesting</div>
                              <p>Antalya, Turkey</p>
                            </figcaption>
                          </figure></a>
                      </div>
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a href="#graphic-design">
                          <figure class="cc-effect">
                            <img
                              src={b4}
                              alt=""
                            />
                            <figcaption>
                              <div class="h4">I began to think differently</div>
                              <p>Istanbul, Turkey</p>
                            </figcaption>
                          </figure></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="Photography" role="tabpanel">
                <div class="ml-auto mr-auto">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a href="#Photography">
                          <figure class="cc-effect">
                            <img src={c} alt="" />
                            <figcaption>
                              <div class="h4">THE MONGOLIA YOUTH ASSOCIATION</div>
                              <p>best guy of the year</p>
                            </figcaption>
                          </figure></a>
                      </div>
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a href="#Photography">
                          <figure class="cc-effect">
                            <img src={c2} alt="" />
                            <figcaption>
                              <div class="h4">Mongolian Student Union</div>
                              <p>Best student of the year</p>
                            </figcaption>
                          </figure></a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        style={{'width': '50%'}}
                      >
                        <a href="#Photography">
                          <figure class="cc-effect">
                            <img src={c3} alt="" />
                            <figcaption>
                              <div class="h4">Astra international</div>
                              <p>Best employee of the year</p>
                            </figcaption>
                          </figure></a>
                      </div>
                      <div
                        class="cc-porfolio-image img-raised"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                      >
                        <a href="#Photography">
                          <figure class="cc-effect">
                            <img src={c4} alt="" />
                            <figcaption>
                              <div class="h4">And one</div>
                              <p></p>
                            </figcaption>
                          </figure></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section" id="experience">
          <div class="container cc-experience">
            <div class="h4 text-center mb-4 title">Work Experience</div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-experience-header">
                    <p>May 2020 - January 2022</p>
                    <div class="h5">EUROPLAST LLC</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">Борлуулалтын албаны дарга</div>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                      Нийт 8 тэрбум төгрөгний борлуулалтыг амжилттай хийсэн. МИК, НОСК, ББСБ, Бүх төрлийн банкны зээл зэрэг бүхий л санхүүгийн 
                      үйлчилгээ үзүүлэгч байгууллагуудтай хамтарч ажиллаж, нийт 12 гаруй орон сууц, 1 бэлэн бизнес, 2 газар, 8 автомашин гэх мэт бүх төрлийн
                      борлуулалтыг хийж туршлага хуримтлуулж чадсан.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-experience-header">
                    <p>September 2019 - May 2020</p>
                    <div class="h5">Arvain Undes Beverage LLC</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">Дотоод Аудитор</div>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                      Алба хэлтэс нэгжүүдийн уялдаа холбоог сайжруулах, ажилчдын бүтээмжийг хэмжиж, ажлын бүтээмжийг сайжруулж, Үйлдвэрлэлийн процесс, дамжлага дундын бүтээмжгүй хугацааг багасгах замаар
                      үйлдвэрлэлийн өртөгийг бууруулж, ажил сайжруулах хамгийн чухал ажлууд болон бусад ажил үүргийн дагуу ажиллаж байв.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-experience-header">
                    <p>September 2019 - May 2020</p>
                    <div class="h5">Arvain Undes Trade LLC</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">Санхүүгийн шинжээч</div>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                      Үйлдвэрлэл талын санхүүгийн тооцоог хийж, бэлэн мөнгөний урсгалын төлөвлөлт, үйлдвэрийн хангамжийн төлөвлөгөөг гаргаж
                      үйлдвэрлэлийн тасалдалгүй байдлыг хангаж ажиллав.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-experience-header">
                    <p>August 2016 - May 2019</p>
                    <div class="h5">Naran Group</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">Sales Consultant</div>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                      Naran Plaza дэлгүүрт 3 жил орчим хугацаанд анхны ажлын гараагаа эхлүүлж байв. 
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container cc-education">
            <div class="h4 text-center mb-4 title">Education</div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-education-header">
                    <p>2022</p>
                    <div class="h5">Training</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">CEO Training</div>
                    <p class="category">Mongolia - Japan Center</p>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                    Гүйцэтгэх удирдлагын сургалт. Бизнесийн үндсэн ойлголт,
                     менежмент стратеги төлөвлөгөө, бизнесийн философи зэрэг чухал чухал зүйлсийг гадарладаг болж байна.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-education-header">
                    <p>2015 - Present</p>
                    <div class="h5">Bachelor's Degree</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">Water Engineer</div>
                    <p class="category">Mongolian University Of Science And Technology</p>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': '100'}}>
                      2015 онд элсэж орсон боловч өнөөдрийг хүртэл төгсөөгүй байна. 1-р курсээсээ 
                      хойш тасралтгүй ажиллаж байна. Ямар ч байсан ШУТИС-аа төгсөнө гэсэн төлөвлөгөөтэй байгаа.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row">
                <div
                  class="col-md-3 bg-primary"
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body cc-education-header">
                    <p>2004 - 2014</p>
                    <div class="h5">High School</div>
                  </div>
                </div>
                <div
                  class="col-md-9"
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-duration="500"
                >
                  <div class="card-body">
                    <div class="h5">24th School</div>
                    <p class="category">School of Secondary board</p>
                    <p style={{'font-family':'Roboto,Helvetica,Arial,sans-serif', 'font-weight': 100}}>
                      Бусдын адилаар онц сурлагтанд байв.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
    </>   
  );
}

export default App;
