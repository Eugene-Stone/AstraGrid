import Header from './components/Header';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className="app-content">
				<section className="hero-panel">
					<div className="hero-panel__text">
						<h1>AstraGrid — trusted digital systems</h1>
						<p>
							Это первый шаг к переносу шаблона на React. Здесь будет главный экран, а
							меню загружается из json-server.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
