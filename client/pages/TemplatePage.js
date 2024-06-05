import React from 'react';
import Jumbotron from '../components/Jumbotron';


function TemplatePage() {
  return (
    <div id="success-page" className="template">
      <Jumbotron className="wrapper">
        <h1 id="success-purchase">Attention</h1>
        <p >Looks like you stumbled upon a page in progress. This page is there as a 
            placeholder for a variety of links that don't have content yet.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a volutpat libero, a rhoncus neque. Fusce dictum pulvinar rutrum. Cras id augue sed ligula hendrerit venenatis in et libero. Mauris ac neque nec libero elementum scelerisque. Proin sit amet leo quam. Nulla elementum finibus nulla at pretium.</p>
      </Jumbotron>
    </div>
  );
}

export default TemplatePage;