import { Header } from './components/Header'
import {Post} from './Post';

import './styles.css';

export function App() {
  return (
    <div>

      <Header />

      <Post 
        author="Bruna Lyara"
        content="Meu namorado é maravilhoso"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  ) 
}



