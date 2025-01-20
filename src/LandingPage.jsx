import React from "react";

const LandingPage = () => {
  return (
    <div className="container-fluid px-3 py-5" style={{ backgroundColor: "#FDF2E6" }}>
      {/* Header Section */}
      <div className="text-center">
        <img src="photos/Reloji.png" className="img-fluid w-50" alt="Reloji" />
        <img src="photos/photo1.png" className="img-fluid w-100" alt="Montre Redmi" style={{ marginTop: "-5rem" }} />
        
        <h1
          className="fs-2 fs-md-1 fw-semibold"
          style={{ marginTop: "-5rem",
                   marginBottom: "3rem"
           }}
        >
          Redmi Watch 5 Active
        </h1>
        <div
          className="d-flex flex-column flex-md-row justify-content-center align-items-center"
          
        >
          <button className="btn btn-danger btn-lg mx-3 mb-3 mb-md-0 fs-5 px-4">
            Commander
          </button>
          <button className="btn btn-info btn-lg mx-3 mb-3 mb-md-0 text-white fs-5 px-4">
            Découvrir
          </button>
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>


      </div>

      {/*Les raisons qui vous laissent penser à acheter votre montre Redmi 5 Active*/}
      <div className="text-center mt-5">
        <div class="row ">
          <div class="col-5">
            <img
              src="photos/pic1.png"
              className="img-fluid w-100 h-100"
              alt="Watches"
            />
          </div>
          <div class="col-7">
            <img
              src="photos/pic4.png"
              className="img-fluid rounded-5 w-100 h-100"
              alt="Watches"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <p
              className="mt-3 fw-semibold fst-italic"
              style={{
                fontSize: "50px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              7 raisons qui vous laissent penser à acheter votre montre Redmi 5 Active
            </p>
          </div>
          <div class="col-7">
            <img
              src="photos/pic3.png"
              className="img-fluid" 
              alt="Watches"
              style={{width: "800px", height: "500px"}} 
            />
          </div>
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-7">
          <h5
            className="mt-3 fw-semibold fst-italic"
            style={{
              fontSize: "50px",
              fontFamily: "Inter, sans-serif",
              marginBottom: "100px"
            }}
          >
            Autonomie de la batterie de 18 jours
          </h5>
          <p class="fs-3 fw-light fst-italic text-start mt-8"
            
          >
          Sa batterie de 470 mAh offre une autonomie de 18 jours en mode 
          d'utilisation standard et élimine le besoin de recharge fréquente 
          en extérieur ou en déplacement.
          </p>
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="col-5 d-flex align-items-center">
          <img
            src="photos/batterie.png"
            class="img-fluid "
            style={{marginTop: "-350px", 
              marginLeft: "20px",  
              height: "1000px",
            }}
            alt="Battery"
          />
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>




      <div className="row mt-5">
        <div className="col-5">
          <img
            src="photos/pic5.png"
            className="img-fluid w-100 "
            style={{marginTop: "-100px", marginLeft: "-20px", height: "700px"}}
            alt="Watches"
          />
        </div>
        <div className="col-7 ">
        <h5
            className="mt-3 fw-semibold fst-italic"
            style={{
              fontSize: "50px",
              fontFamily: "Inter, sans-serif",
              marginBottom: "100px"
            }}
          >
            Réduction de bruit avec double microphone et appels Bluetooth®
          </h5>
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-6">
          <h5
            className="mt-3 fw-semibold fst-italic"
            style={{
              fontSize: "50px",
              fontFamily: "Inter, sans-serif",
              marginBottom: "100px"
            }}
          >
            Analyse de la fréquence cardiaque
          </h5>
          <img
            src="photos/pic.png"
            className="img-fluid w-100 "
            style={{marginTop: "-100px", marginLeft: "-20px", height: "700px"}}
            alt="Watches"
          />
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="col-6 d-flex align-items-center">
          <img
            src="photos/pic6.png"
            class="img-fluid "
            style={{marginTop: "-400px", 
              marginLeft: "20px",  
              height: "1000px",
              width: "1000px",
            }}
            alt="Battery"
          />
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          <img
            src="photos/pic7.png"
            className="img-fluid w-100 "
            style={{marginTop: "-400px", marginLeft: "-20px", height: "1000px"}}
            alt="Watches"
          />
        </div>
        <div className="col-6 ">
          <h5
              className="mt-3 fw-semibold fst-italic"
              style={{
                fontSize: "50px",
                fontFamily: "Inter, sans-serif",
                marginBottom: "100px"
              }}
            >
              Surveillance du taux d'oxygène dans le sang
          </h5>
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>    
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-6">
          <h5
            className="mt-3 fw-semibold fst-italic"
            style={{
              fontSize: "30px",
              fontFamily: "Inter, sans-serif",
              marginBottom: "100px",
              color: "#FF3131"
            }}
          >
            Ne manquez pas cette opportunité ! Offrez-vous la montre connectée qui révolutionnera votre quotidien. 
            <br /><br />

            Cliquez ci-dessous pour commander maintenant à un prix exclusif !!
          </h5>
          <img
            src="photos/prix.png"
            className="img-fluid w-100 "
            style={{marginTop: "-100px", marginLeft: "-20px", height: "200px"}}
            alt="Watches"
          />
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="col-6 d-flex flex-column align-items-center">
          <h4 class="text-center" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '50px', marginLeft: '150px' }}>
            "Écran LCD 2"
          </h4>
          <img
            src="photos/pic8.png"
            class="img-fluid"
            style={{ marginTop: "10px", height: "500px" }}
            alt="Battery"
          />
        </div>

        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
            <img
              src="photos/pic9.png"
              class="img-fluid rounded-5"
              
              alt="Battery"
            />
        </div>
        <div class="col-12">
          <p class="fs-3 fw-light fst-italic text-start mt-8"
            
          >
          Prend en charge plus de 140 modes d'entraînement, avec détection automatique des activités comme la course à pied, la marche, le vélo, le vélo elliptique, le rameur, et de la corde à sauter.
          <br /><br />
          Suit avec précision le niveau d'effort quotidien, le score de vitalité et d'autres indicateurs de santé, pour garantir que chaque entraînement est plus efficace et axé sur les données.


          </p>
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>

      </div>

      <div class="row mt-5">
        <div class="col-5">
        <p class="fs-3 fw-light fst-italic text-start "
            style={{ marginTop: "50%" }}
            >
            Portez-la sans crainte sous la douche ou à la piscine.
            <br /><br />

            Ce produit est étanche jusqu'à une pression de 5 ATM et
            peut être utilisé dans l'eau sans aucun problème.
  
            </p>
            <img
              src="photos/prix.png"
              className="img-fluid mt-5"
              style={{
                marginTop: "-100px",
                marginLeft: "-20px",
                maxHeight: "200px",
                width: "100%",
                objectFit: "contain"
              }}
              alt="Watches"
            />

          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="col-7 d-flex flex-column align-items-center">
        <h4 class="text-center" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '5vw', marginLeft: '10%' }}>
          Résistance à l'eau 5ATM
        </h4>      

          <img
            src="photos/photo6.webp"
            class="img-fluid"
            style={{ marginTop: "10px", height: "500px" }}
            alt="Battery"
          />
        </div>

        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>
      
      <div class="row mt-5">
        <div class="col-12">
          <h4 class="text-center" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '5vw', marginLeft: '10%' }}>
              Plus de 200 cadrans de montre 
              pour mettre en valeur votre personnalité
          </h4>
        </div>
        <div class="col-12 ">
            <img
              src="photos/pic10.png"
              class="img-fluid rounded-5"
              
              alt="Battery"
            />
          
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-danger btn-lg fs-1 fw-medium rounded-5 px-4 w-75 w-md-50 w-lg-25">
              Commander
            </button>
          </div>
        </div>
        <div class="text-center">
          <img
            src="photos/down.png"
            class="img-fluid mx-auto d-block mt-5"
            alt="Watches"
            style={{width: "100px", height: "100px"}}
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-4">
        <h5
          className="mt-3 fw-semibold fst-italic text-center"
          style={{
            fontSize: "2em",
            fontFamily: "Inter, sans-serif",
            marginBottom: "150px",
            color: "#FF3131",
            
          }}
        >
          <span >2 achetés</span><br></br>
          <span >=</span><br></br>
          <span >1 offert</span>
        </h5>
        <img 
            src="photos/fleche.png"
            class="img-fluid mx-auto d-block "
            alt="Watches"
            style={{width: "200px", height: "200px", marginTop:"-7rem"}}
        />

        </div>
        <div class="col-12 col-md-8 mx-auto mt-5">
          <h1 class="card-title text-center mb-4">Veuillez remplir le formulaire :</h1>
          <div class="card mx-auto mt-5" style={{backgroundcolor: "#F4BB7B", maxwidth: "600px", padding: "20px", borderradius: "15px"}}>
            <div class="card-body">
              <form>
                <div class="row mb-3">
                  <label for="nom" class="col-3 col-form-label">Nom</label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="nom" placeholder="Votre nom" required />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="prenom" class="col-3 col-form-label">Prénom</label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="prenom" placeholder="Votre prénom" required />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="adresse" class="col-3 col-form-label">Adresse</label>
                  <div class="col-9">
                    <input type="text" class="form-control" id="adresse" placeholder="Votre adresse" required />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="numero" class="col-3 col-form-label">Téléphone</label>
                  <div class="col-9">
                    <input type="tel" class="form-control" id="numero" placeholder="Votre numéro" required />
                  </div>
                </div>

                <div class="text-center my-4">
                  <span class="fw-semibold fs-4" style={{color: "#ff3131"}}>79,98€</span>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-danger btn-lg w-75 w-md-50 w-lg-25">
                    Commander
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>


      </div>
      
    </div>
  );
};

export default LandingPage;
