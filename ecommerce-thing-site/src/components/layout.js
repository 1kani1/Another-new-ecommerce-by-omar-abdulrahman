import '../app/globals.css';
import Footer from './footer';
import Header from './header';

export default function Layout({ children })
{
    return(
            <div>

                {children}
            </div>    
    );
}