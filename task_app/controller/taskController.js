
const tasklist = [{id:1, title: "laver la voiture",date_debut: "12/04/2023",date_fin: "13/04/2023" }];

const getAll = (req, res) => {
    res.send(tasklist);
};

const store = (req, res) => {
    console.log('Body :');
  
    console.log(req.body);

    const product = {
      id: Date.now(),
      title: req.body.title,
      date_debut: req.body.date_debut,
      date_fin: req.body.date_fin,
    };
    products.push(product);
    res.send(product);
};

const update


const destroy