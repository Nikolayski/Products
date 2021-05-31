export const  getAll = () =>{
  return  fetch('http://localhost:5000/products')
    .then(response => response.json())
    .catch(error => console.log(error));
}

export const AddProduct = (product) => {
        return   fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.text())
            .catch(error => console.log(error));
}

export const GetCollection = (val) => {
  return  fetch(`http://localhost:5000/products/collections/${val}`)
            .then(res => res.json())
            .catch(error => console.log(error))
}

export const GetMyProducts = (email) => {
  return  fetch('http://localhost:5000/products/myproducts/' + email)
            .then(res => res.json())
            .catch(error => console.log(error));
}

export const RemoveProduct = (id) => {
    return   fetch('http://localhost:5000/products/' + id, {
              method: 'DELETE'
    })
        .then(res => res.text())
        .catch(error => console.log(error));
}

export const GetProduct = (id) => {
    return fetch('http://localhost:5000/products/' + id)
       .then(res => res.json())
       .catch(error => console.log(error));
}

export const EditProduct = (product) => {
    return  fetch('http://localhost:5000/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
        .then(res => res.text())
        .catch(error => console.log(error));
}

export const AddContact = (contact) => {
  return  fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(contact),
      })
      .then(res => res.text())
      .catch(error => console.log(error));
}

export const Register = (user) => {
  return  fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => res.text())
        .catch(error => console.log(error));
}


export const Login = (user) => {
    return fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => res.text())
        .catch(error => console.log(error));
}
