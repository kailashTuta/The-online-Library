import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <h3>The Online Library</h3>
                    <p>
                        A service dedicated to students of the University Distance learning community. We provide online resources, professional support, and guidance to all our students whenever, and from wherever they have chosen to study.
                    </p>

                    <ul className="socials">
                        <li><a href="$"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="$"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="$"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="$"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="$"><i className="fab fa-google-plus"></i></a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>copyright &copy;2021 The Online Library. designed by <span>Kailash Tuta</span> </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
