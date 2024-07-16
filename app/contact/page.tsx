'use client';

import { ContactContainer } from "../../containers/ContactContainer";
import { GamingTokenDaoInfoComponent } from "../../components/infoComponents/GamingTokenDaoInfoComponent";
import { TimelineInfoComponent } from "../../components/infoComponents/TimelineInfoComponent";
import { RapidlottoInfoComponent } from "../../components/infoComponents/RapidlottoInfoComponent";

export default function ContactPage() {

    return (
        <>
            <ContactContainer />
            <GamingTokenDaoInfoComponent />
            <TimelineInfoComponent />
            <RapidlottoInfoComponent />
        </>
    )
}