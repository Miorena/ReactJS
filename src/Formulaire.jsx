import React, {useState} from "react";
import "./Formulaire.css";

function Formulaire() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value} =e.target;

        setFormData((pervData) => ({
            ...pervData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulaire soumis: ", formData);
        setSubmitted(true);

        setFormData({
            name:"",
            email: "",
            password:"",
        });
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white/20 border border-white/10 backdrop-blur-md shadow-lg rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-white/60 text-gray-800 border border-gray-300 rounded-md focus:outline-none input-gradient-focus backdrop-blur-sm"
                />

                <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-white/60 text-gray-800 border border-gray-300 rounded-md focus:outline-none input-gradient-focus backdrop-blur-sm"
                />

                <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Votre mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 bg-white/60 text-gray-800 border border-gray-300 rounded-md focus:outline-none input-gradient-focus backdrop-blur-sm"
                />

                <label className="inline-flex items-center space-x-2 text-sm text-gray-600">
                    <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                    className="accent-purple-600"
                    />
                    Afficher mot de passe
                </label>

                <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-700 transition-colors font-semibold">
                    Envoyer
                </button>

            </form>
            {submitted && (
                <p className="mt-4 text-white-700 font-medium text-center">
                    Bienvenue ! 🎉
                </p>
            )}
        </div>
    );
}

export default Formulaire;