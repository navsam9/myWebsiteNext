import { ReactNode } from "react";
import styles from "../styles/projectCard.module.css"
import Image from 'next/image';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea, Container } from "@mui/material";
import { green } from "@mui/material/colors";


interface Props {
    name?: String,
    description?: String
    website?: String
    source?: String
}


export default function projectCard({ name, description, website, source }: Props) {
    return (
        <Container>
            <Card className={styles.card}>
                <CardActionArea sx={{ "&:hover": { color: "white" }, height: "300px" }}
                href = {`${website}`}>
                    <CardMedia
                        component="img"
                        height="200px"
                        image={`https://raw.githubusercontent.com/navsam9/${name}/master/preview.jpg`}
                        alt="snake"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" className={styles.title}>
                            {name}
                        </Typography>
                        <Typography variant="body2" className={styles.description}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx = {{justifyContent: "center", height: "50px"}}>
                    <Button size="medium" color="primary" href = {`${source}`}>
                        &lt;source code&gt;
                    </Button>
                </CardActions>
                {/* <CardActionArea sx={{ "&:hover": { color: "white" }, height: "50%" }}>
                    <Typography gutterBottom variant="body1" className={styles.source}>
                        &lt;source code&gt;
                    </Typography>
                </CardActionArea> */}
            </Card>
        </Container>
    );
}