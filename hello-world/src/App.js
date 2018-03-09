import React, {Component} from "react";
import "./App.css";
import Collapse from "./Collapse"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <a href="#"> SeKoBeY</a>
                    <nav>
                        <section className="container">
                            <aside className="link-border">
                                <a className="active">
                                    hello world
                                </a>
                            </aside>
                            <aside className="link-border">
                                <a href="/home"> home </a>
                                <a href="/about"> about </a>
                                <a href="/works"> works </a>
                                <a href="/contact"> contact </a>
                            </aside>
                        </section>
                    </nav>
                </header>
                <main>
                    <div className="fadeInUp">
                        <header className="container header fadeInUp">
                            <h1>Lorem ipsum</h1>
                            <h2>alksjdlşkasdlşaksdlşasşdkaşlskdalşskdlşaksdşaskdşaskdasldkaşlskd
                                alksjdlşkasdlşaksdlşasşdkaşlskdalşskdlşaksdşaskdşaskdasldkaşlskd
                                alksjdlşkasdlşaksdlşasşdkaşlskdalşskdlşaksdşaskdşaskdasldkaşlskd </h2>
                            <a href="#" className="btn dark"></a>
                        </header>

                    </div>
                    <Collapse title="Serkan Collapse Title" content="askldjalksjdklasjdlaskdj"/>
                </main>
                <footer>
                    <section className="container">
                        <aside className="link-border">
                            <a className="active">
                                twitter
                            </a>
                            <a className="active">
                                facebook
                            </a>
                        </aside>
                    </section>
                </footer>
            </div>
        );
    }
}

export default App;
