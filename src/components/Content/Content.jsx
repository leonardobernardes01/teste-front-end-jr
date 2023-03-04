import React from "react";
import Fullbanner from "./Fullbanner";
import Tipbar from "./Tipbar";
import Shelf from "./Shelf";
import Banners from "./Banners";
import Categories from "./Categories";

import "../../styles/content/content.css"

import banner1 from "../../images/banner1.png"
import banner2 from "../../images/banner2.png"
import tecnologia from "../../images/tecnologia.png"
import supermercado from "../../images/supermercado.png"
import bebidas from "../../images/bebidas.png"
import ferramentas from "../../images/ferramentas.png"
import saude from "../../images/saude.png"
import esportes from "../../images/esportes-fitness.png"
import moda from "../../images/moda.png"

function Content() {

    const tipbar = [
        {
            "title": "Tecnologia",
            "path": tecnologia
        },
        {
            "title": "Supermercado",
            "path": supermercado
        },
        {
            "title": "Bebidas",
            "path": bebidas
        },
        {
            "title": "Ferramentas",
            "path": ferramentas
        },
        {
            "title": "Saúde",
            "path": saude
        },
        {
            "title": "Esportes e Fitness",
            "path": esportes
        },
        {
            "title": "Moda",
            "path": moda
        }
    ]

    const sections = [
        {
            "title": "celular"
        },
        {
            "title": "acessórios"
        },
        {
            "title": "tablets"
        },
        {
            "title": "notebooks"
        },
        {
            "title": "tvs"
        },
        {
            "title": "ver todos"
        },

    ]

    return (
        <>
            <Fullbanner/>
            <section className="content__tipbar">
                <ul className="content__tipbar--ul">
                    <Tipbar data={tipbar}/>
                </ul>
            </section>

            <Shelf title={sections}/>

            <section className="content__banners">
                <Banners img={banner1} title="Parceiros" description="Lorem ipsum dolor sit amet, consectetur"></Banners>
                <Banners img={banner1} title="Parceiros" description="Lorem ipsum dolor sit amet, consectetur"></Banners>
            </section>

            <Shelf/>

            <section className="content__banners">
                <Banners img={banner2} title="Produtos" description="Lorem ipsum dolor sit amet, consectetur"></Banners>
                <Banners img={banner2} title="Produtos" description="Lorem ipsum dolor sit amet, consectetur"></Banners>
            </section>

            <Categories/>

            <Shelf/>
        </>
    )
}

export default Content