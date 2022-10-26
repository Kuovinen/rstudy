import path from "path";

let data = [
  {
    name: `Head tags`,
    tags: <div>
          <div>{'<title>'} <span className='g'>shows up uptop in the browser</span></div>
          <div>{'<meta>'}</div>
          <div>{'<script'} <span className='g'> src="./path/to/file" defer</span>{'>'} <span className='g'> insert js</span></div>
          <div>{'<no-script>'}<span className='g'>content to display if scripts are disabled</span></div>
          <div>{'<style>'}</div>
          <div>{'<link'} <span className='g'>rel="stylesheet" href="styles.css"</span>{'>'} <span className='g'> insert css  from an external file</span></div>
   

      </div>,
    example: <div>

      </div>,
  },
  {
    name: `Content container tags`,
    tags: <div>
          <div>{'<h1> to <h6>'} <span className='g'>heading tag</span></div>
          <div>{'<div>'} <span className='g'>block container</span></div>
          <div>{'<div>'} <span className='g'>paragraph, block</span></div>
          <div>{'<span>'} <span className='g'>inline container</span></div>
          <div>{'<strong>'} <span className='g'>indicated importants of content</span></div>
          <div>{'<em>'} <span className='g'>used to change meaning of text same way emphasis sometimes changes it in spoken speach</span></div>

   

      </div>,
    example: <div>

      </div>,
  },
  {
    name: `List tags`,
    tags: <div>
          <div>{'<ol>'} <span className='g'>Ordered list incasor tag</span></div>
          <div>{'<ul>'} <span className='g'>Un-ordered list incasor tag</span></div>
          <div>{'<li>'} <span className='g'>Individual list item indicator tag</span></div>
      </div>,
    example: <div>

      </div>,
  },

];

export default data;
