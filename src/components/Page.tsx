import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';

const Page = ({ pageName }: { pageName: string }) => {
    switch (pageName) {
        case 'home':
            return <Home></Home>;
        case 'about':
            return <About></About>;
        case 'projects':
            return <Projects></Projects>;
        case 'contact':
            return <Contact></Contact>;
        default:
            return <Home></Home>;
    }
};

export default Page;
