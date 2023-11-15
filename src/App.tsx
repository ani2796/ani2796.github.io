import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Page from './components/Page';

function App() {
    const [pageName, _] = useState('about');

    return (
        <>
            <Header></Header>
            <Page pageName={pageName}></Page>
            <Footer></Footer>
        </>
    );
}

export default App;
