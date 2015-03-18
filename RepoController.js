//github username (login)
//repository_name (unique according to specific user)

// Route: /repo/:username/:reponame
// Template: repo.html
// Controller: RepoController

// modify github service (2 http calls to provide new data)
//  1) get details of repository (open issues count)
//  2) callobators for a project
// https://api.github.com/repos/angular/angular.js
// https://api.github.com/repos/angular/angular.js/collaborators