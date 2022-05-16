import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Button from './components/Button';

const App = () => {
  const [openedSection,setOpenedSection] = useState('html'); //this section variable is for knowing which editor is active right now.
  const [html,setHtml]= useState('');
  const [css,setCss] = useState('');
  const [js,setJs] = useState('');

  const [srcDoc,setSrcDoc] = useState(``);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);
    
    return ()=> clearTimeout(timeout);
  },[html,css,js])
  
  return (
    <div className='container'>
      <div className='top-pane'>
        <div className='tab-buttons'>
          <Button change={setOpenedSection} openedSection={openedSection} lang="html"/>
          <Button change={setOpenedSection} openedSection={openedSection} lang="css"/>
          <Button change={setOpenedSection} openedSection={openedSection} lang="js"/>
        </div>
        {
          openedSection=='html' ?
          <Editor language="html" value={html} setValue={setHtml}/> :
          openedSection=='css' ?
          <Editor language="css" value={css} setValue={setCss}/> :
          <Editor language="js" value={js} setValue={setJs}/>
        }
      </div>

      <div className='bottom-panel' style={{height:'80vh'}}> 
        <iframe 
          id="result_window"
          srcDoc={srcDoc}
          title="result"
          sandbox='allow-scripts allow-same-origin'
          frameBorder='1'
          width='100%'
          height='100%'
        />
      </div>
    </div>

  );
}

export default App;
