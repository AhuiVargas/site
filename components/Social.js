import styled from "styled-components";
import { mixins } from "../styles";
import Image from "next/image";

const StyledFooter = styled.footer`
	padding: 2rem;
	background-color: #000;
	z-index: 10;
	position: relative;

	.__wrapper {
		max-width: 74rem;
		margin: 0 auto;
		background-color: transparent;
	}

	.__menu {
		${mixins.grid}

		a {
			display: block;
			padding: 1rem;
			color: #fff;
			font-size: 1.1rem;
			font-weight: 200;
			text-align: center;
			border: 1px solid #fff;
			background: transparent;
			position: relative;
			overflow: hidden;
			transition: color 0.5s ease;

			&:hover {
				color: #fff;
			}

			&:before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(263deg, #ff8c38 16.7%, #72c6e1 95.73%);
				z-index: -1;
				opacity: 0;
				transition: opacity 0.6s ease;
			}

			&:hover:before {
				opacity: 1;
			}
		}
	}

	.__badge {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		cursor: pointer;
	}
`;

const Social = () => (
	<section>
		<StyledFooter>
			<div className="__wrapper">
				<div className="__menu">
					<a
						href="mailto:ahuijr@gmail.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						Email
					</a>
					<a
						href="/av-resume-2025.pdf"
						rel="noopener noreferrer"
						target="_blank"
					>
						CV
					</a>
					<a
						href="https://www.linkedin.com/in/ahui-vargas/"
						rel="noopener noreferrer"
						target="_blank"
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/AhuiVargas/"
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub
					</a>
				</div>
				<div className="__badge">
					<a
						href="https://www.codewars.com/users/Ahuizotl"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							src="https://www.codewars.com/users/Ahuizotl/badges/large"
							alt="Codewars Badge"
							width={350}
							height={30}
							unoptimized
						/>
					</a>
				</div>
			</div>
		</StyledFooter>
	</section>
);

export default Social;
