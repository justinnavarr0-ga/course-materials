const skills = [
    {id: 125223, skill: "HTML", description: "HTML is a..."},
    {id: 127904, skill: "CSS", description: "CSS is a..."},
    {id: 139608, skill: "Javascript", description: "Javascript is a..."}
 ];


function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(body){
    body.id = Date.now() % 1000000;
    skills.push(body)
}

function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function updateOne(id, body){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills[idx].description = body.description;
}

module.exports = {
    getAll,
    getOne, 
    create,
    deleteOne,
    updateOne 
}