import Home from '@pages/Home';
import About from '@pages/About';
import Contact from '@pages/Contact';
import Projects from '@pages/Projects';

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
