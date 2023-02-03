const app = Vue.createApp({
    data() {
        return {

        }

    }
})

app.component('mi-card', {
    template: `<div class="card" style="width: 18rem;">
        <img src="data:image/jpeg;base64,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" class= "card-img-top" alt="..." >
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>`
})

app.component('mi-tabla',{
    template: `<select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>`
})

app.component('mi-range',{
    template: `<label for="customRange1" class="form-label">Example range</label>
    <input type="range" class="form-range" id="customRange1">`
})

app.component('mi-progress', {
    template: `<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 0%"></div>
  </div>`
})