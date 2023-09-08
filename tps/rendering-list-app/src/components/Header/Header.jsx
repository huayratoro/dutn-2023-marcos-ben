import "./Header.css"

const Header = () => {
    return (
        <header>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Personajes</li>
                    <li>Contact</li>
                </ul>
            </div>
            <section>
                <div class="cont-imagen">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" 
                        alt="hp" 
                    />
                </div>
            </section>
            <hr />
        </header>
    )
}

export default Header