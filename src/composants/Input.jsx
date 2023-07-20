import React from "react";

function Field({ name, value, onChange, children }) {
    return <div className="form-group mt-2">
        <label htmlFor={name} >{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
    </div>
}

function Checkbox({ name, value, onChange, children }) {
    return <div className="form-group mt-3">
        <input type="checkbox" value={value} onChange={onChange} id={name} name={name} className="form-check-input" />
        <label htmlFor={name} className="form-check-label">{children}</label>
    </div>
}

export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: '',
            prenom: '',
            newsletter: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const data = JSON.stringify(this.state)
        // console.log(data); 
        this.setState({
            nom: '',
            prenom: '',
            newsletter: false
        })
    }

    render() {
        return <div className="row">
            <div className="col-md-6">
                <form className="container" onSubmit={this.handleSubmit}>
                    <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
                    <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
                    <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
                    <div className="mt-3 form-group">
                        <button className="btn btn-primary">Envoyer</button>
                    </div>

                </form>
            </div>
        </div>
    }
}