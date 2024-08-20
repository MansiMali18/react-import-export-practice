import ReactDOM from 'react-dom/client';
import Contact from './View/CONTACT/Contact.js';
import Home from './View/HOME/Home.js'
import About from './View/ABOUT/About.js';
import Services from './View/SERVICES/Services.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

const cp=window.location.pathname;

if(cp=='/')
{
  root.render(<Home/>)
}
else if(cp=='/About')
{
  root.render(<About/>)
}
else if(cp=='/Contact')
{
  root.render(<Contact/>)
}
else if(cp=='/Services')
{
  root.render(<Services/>)
}
else
{
  root.render(<h1>NOt found</h1>)
}
