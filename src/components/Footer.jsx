import React from 'react'

export default function Footer() {
  const redirectToEmail = () => {
    window.location.href = 'mailto:contact@makear.ai';
  };
  const phoneNumber = '+9818051166';
  return (
    <div>
        <footer>
        <div class="footer-content">
            {/* <h3>MakeAr</h3> */}
            {/* <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p> */}
            <ul class="socials">
                <li><a onClick={redirectToEmail} href="mailto:contact@makear.ai"><i class="fa fa-envelope"></i></a></li>
                <li><a href={`tel:${phoneNumber}`}><i class='fa fa-phone'></i></a></li>
                <li><a href="https://www.linkedin.com/company/makear-io/mycompany/"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        {/* <div class="footer-bottom">
            <p>copyright &copy; <a href="#">Foolish Developer</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div> */}

    </footer>
    </div>
  )
}
