import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-content">
                    <h3>The Online Library</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid obcaecati fuga consequatur omnis.</p>

                    <ul className="socials">
                        <li><a href="$"><i className="fab fa-facebook-f"></i></a></li>
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
