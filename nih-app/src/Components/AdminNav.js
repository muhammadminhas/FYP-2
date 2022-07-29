import React from 'react'

export default function AdminNav() {
  React.useEffect(() => {
    let links = document.querySelectorAll('a.nav-link');
   
    if(window.location.pathname=="/ImportExport"){
      links[0].classList.remove('active');
      links[2].classList.remove('active');
      links[3].classList.remove('active');
      links[4].classList.remove('active');
      links[5].classList.remove('active');
      links[1].classList.add('active');
      }
      if(window.location.pathname=="/"){
        links[1].classList.remove('active');
        links[2].classList.remove('active');
        links[3].classList.remove('active');
        links[4].classList.remove('active');
        links[5].classList.remove('active');
        links[0].classList.add('active');
        }
        if(window.location.pathname=="/preprocess"){
          links[1].classList.remove('active');
        links[0].classList.remove('active');
        links[3].classList.remove('active');
        links[4].classList.remove('active');
        links[5].classList.remove('active');
        links[2].classList.add('active');
          }
          if(window.location.pathname=="/adminnotifications"){
            links[1].classList.remove('active');
          links[0].classList.remove('active');
          links[3].classList.remove('active');
          links[4].classList.remove('active');
          links[2].classList.remove('active');
          links[5].classList.add('active');
            }
  
  }, []);
  return (
    <div style={{width: '80%', marginLeft: '10%', marginTop: '2%',background:'#D4D4D4'}}>
       <nav className="nav nav-tabs nav-pills nav-fill">
  <a id="nav-view" className="nav-link" aria-current="page" href="/">View Data</a>
  <a id="nav" className="nav-link"  href="/ImportExport">Import/Export Data</a>
  <a id="nav" className="nav-link" href="/preprocess">Preprocess Data</a>
  <a id="nav" className="nav-link" href="#">Model Training</a>
  <a id="nav" className="nav-link" href="#">Model Testing</a>
  <a id="nav" className="nav-link" href="/adminnotifications">Notifications</a>
  
</nav>
</div>
  )
}
