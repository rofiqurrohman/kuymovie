class NavBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div class="container">    
                <a class="navbar-brand font-weight-bold" href="">Kuy Movie</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav mx-auto">
                    <a class="nav-item nav-link active mr-3" href="">Home</a>
                    <a class="nav-item nav-link active mr-3" href="#">Genre</a>
                    <a class="nav-item nav-link active mr-3" href="#">About</a>
                    <a class="nav-item nav-link active mr-3" href="#contact">Contact</a>
                    </div>
                </div>
                <form class="form-inline">
	                <button type="button" class="btn rounded-pill">Sign In</button>
            	</form>
            </div>
        </nav>
        `;
    }
 }
  
 customElements.define("nav-bar", NavBar);