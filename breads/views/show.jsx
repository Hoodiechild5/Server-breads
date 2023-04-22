const React = require('react')
const Default = require('./layouts/default')

function Show({ bread, index }) {
  // Confirm we are getting our bread data in the terminal.
  // console.log(bread.name)
  return (
    <Default>
      <h2>Show Page</h2>
      <h3>{bread.name}</h3>
      <img src={bread.image} alt={bread.name} />

      <form action={`/breads/${index}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE" />
      </form>
    </Default>

  )
}


module.exports = Show

