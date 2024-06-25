document.addEventListener('DOMContentLoaded', () =>{
    showhomes();
});

// function loadModal() {
//     $('#exampleModal').modal('show');
// }

var properties = [
    { home: '130 Sylvan Ave, Clifton, NJ 07011', image:'1.jpg', price: '$425,000',  Beds: '3', bath: '1.4', sqftlot:'4,356' },
    { home: '900 Valley Rd Apt D11, Clifton, NJ 07013', image:'2.jpg', price: '$285,000',  Beds: '2', bath: '2', sqftlot:'1,397' },
    { home: '206 E 6th St, Clifton, NJ 07011', image:'3.jpg', price: '$499,000',  Beds: '3', bath: '2.5', sqftlot:'5,001' },
    { home: '328 Mount Prospect Ave, Clifton, NJ 07012', image:'4.jpg', price: '$675,000',  Beds: '4', bath: '3', sqftlot:'10,998' },
    { home: '274 E 4th St, Clifton, NJ 07011', image:'5.jpg', price: '$549,900',  Beds: '3', bath: '2', sqftlot:'3,698' },
    { home: '425 Grove St, Clifton, NJ 07013', image:'6.jpg', price: '$995,000',  Beds: '6', bath: '3.5', sqftlot:'  0.68acre lot' }
];




function showhomes() {
    let output = ''
    for (let i = 0; i < properties.length; i++) {
        let home = properties[i].home;
        let image = properties[i].image;
        let price = properties[i].price;
        let Beds = properties[i].Beds;
        let bath = properties[i].bath;
        let sqftlot = properties[i].sqftlot;

        output+= `<div class="col-md-4">
        <div class="card-box-a card-shadow">
          <div class="img-box-a">
            <img src="assets/img/property/${image}" alt="" class="img-a img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <a href="#">
                  ${home}
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a"> ${price}</span>
                </div>
                <a href="mailto:info@baschus.com" class="link-a">Click To Email Us
                  <span class="bi bi-chevron-right"></span>
                </a>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li>
                    <h4 class="card-info-title">sqft lot</h4>
                    <span>${sqftlot}
                    </span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Beds</h4>
                    <span>${Beds}</span>
                  </li>
                  <li>
                    <h4 class="card-info-title">Baths</h4>
                    <span>${bath}</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`  
    }
    document.getElementById('property-g').innerHTML = output;
}
