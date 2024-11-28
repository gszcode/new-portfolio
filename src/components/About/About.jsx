import "./About.css";
import Title from "../Title/Title";
import Box from "../Box/Box";

function About() {
	return (
		<section className='about_container' id='about'>
			<Title title='Sobre mi' />
			<Box>
				<p>
					Como <span className='color'>Desarrollador web</span>, disfruto especialmente de la maquetación y de
					implementar diseños en aplicaciones. Me apasionan los desafíos que plantean ciertos proyectos, ya que es donde
					más aprendo.
					<br />
					En mi tiempo libre, disfruto de hacer deportes. También dedico tiempo a mejorar mis conocimientos y
					habilidades. Además, en 2025 comienzo la carrera de <span className='color'>
						Tecnicatura en Programación
					</span>{" "}
					en la <span className='color'>Universidad Nacional Guillermo Brown</span> (UNaB)
				</p>
			</Box>
		</section>
	);
}

export default About;
