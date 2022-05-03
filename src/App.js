import Todo from './Components/Todo';
import {Corpo} from './Components/Button';
import './App.css';
import { useEffect } from 'react';



function App() {
	useEffect(function(){
		import( './TraineeCjr2.js');
	},[])
  return (
    <>
      <Todo>
	<header className='Topo'>
		<div className="menu">
			<h3>dinnerdash</h3>
			<nav className="menuBox">
				<a href="#" className="opção">blackoffice</a>
        		<a href="#" className="opção">perfil</a>
       			<a href="#" className="opção">sair</a>
			</nav>
		</div>
		<div>
			<h1>Backoffice</h1>
			<p>Gerencie pedidos, refeições e mais.</p>
		</div>
	</header>

  <nav className="caminhos">
		<a href="#" className="caminho">Pedidos</a>
        <a href="#" className="caminho">Usuários</a>
       	<a href="#" className="caminho">Refeições</a>
       	<a href="#" className="caminho">Categorias de Refeição</a>
	</nav>
    </Todo>


    <Corpo>
    
	<main>
		<table>
			<thead>
				<tr className="user_card">
					<th className="card_name">Nome</th>
					<th className="card_email">Email</th>
					<th className="card_date">Cadastrado em</th>
					<th className="action_buttons"></th>
				</tr>
			</thead>
			<tbody className="users"></tbody>
		</table>
		<div className="pagination"></div>
	</main>
    </Corpo>



    <Todo>
	<footer className='pe'>
		<span>dinnerdash | todos os direitos reservados</span>
		<span>desenvolvido por Trainee Legal</span>
	</footer>
      </Todo>
    </>
  );
}

export default App;
