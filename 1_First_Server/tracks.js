//This module stores the track data and acts as a sort of repository
let tracks = [
    {id:1, title:"#3", artist:"Aphex Twin", album:"Selected Ambient Works", length:462},
    {id:2, title:"Port Rhombus", artist:"Squarepusher", album:"Port Rhombus", length:409},
    {id:3, title:"Rrjka", artist:"UFO95", album:"Popularity is Overrated", length:353},
    {id:4, title:"Aurora Centralis", artist:"747", album:"Aurora Centralis EP", length:422},
    {id:5, title:"Cirrus", artist:"Bonobo", album:"The North Borders", length:352}
];

const getAll = () => {
    return tracks;
};

const getById = (id) => {
    const track = tracks.find(track => track.id == id);
    return track;
}

module.exports = {getAll, getById};