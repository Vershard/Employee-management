const renderTeam = team => {

    const renderManager = manager => {
        return `
<div class="card employeeCard">
<div class="card-header">
    <h2 class="card-title>${manager.getName()}</h2>
    <h3 class="card-title">${manager.getRole()}
</div>
<div class='card-body'>
<ul class="list-group">
<li class="list-group-item">ID: ${manager.getId()}</li>
<li class="list-group-item">Email: ${manager.getEmail()}</li>
<li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
</ul>
</div>
</div>`
    }

    const renderEngineer = engineer => {
        return `
<div class="card employeeCard">
<div class="card-header">
    <h2 class="card-title>${engineer.getName()}</h2>
    <h3 class="card-title">${engineer.getRole()}
</div>
<div class='card-body'>
<ul class="list-group">
<li class="list-group-item">ID: ${engineer.getId()}</li>
<li class="list-group-item">Email: ${engineer.getEmail()}</li>
<li class="list-group-item">Git Hub : ${engineer.getGithub()}</li>
</ul>
</div>
</div>`
    } 

    const renderIntern = intern => {
        return `
<div class="card employeeCard">
<div class="card-header">
    <h2 class="card-title>${intern.getName()}</h2>
    <h3 class="card-title">${intern.getRole()}
</div>
<div class='card-body'>
<ul class="list-group">
<li class="list-group-item">ID: ${intern.getId()}</li>
<li class="list-group-item">Email: ${intern.getEmail()}</li>
<li class="list-group-item">School Name : ${intern.getSchoolName()}</li>
</ul>
</div>
</div>`
    }

    const html = [];
console.log("HTML TEMPLATE PAGEEE",team)
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => renderManager(manager)))

    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => renderEngineer(engineer)).join(''))

    //html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => renderManager(intern)).join(''))

    return html.join('');

}

module.exports = team => {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Team Builder</title>
    </head>
    <body>
    <div class="container">
    <div class="row">
    <div class="col-lg-12">${renderTeam(team)}
    </div>
    </div>
    </div>
        
    </body>
    </html>`;
}