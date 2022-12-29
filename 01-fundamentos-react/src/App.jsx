import { Header } from './components/Header'
import {Post} from './Post';

import './styles.css';

export function App() {
  Return (
    <div>

      <Header />

      <Post 
        author="Bruna Lyara"
        content="Meu namo é maravilhoso"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  ) 
}



