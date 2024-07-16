import { TimelineInfoComponent } from "../components/infoComponents/TimelineInfoComponent";
import { LottoContainer } from "../containers/LottoContainer";
import { RapidlottoInfoComponent } from "../components/infoComponents/RapidlottoInfoComponent";
import { GamingTokenDaoInfoComponent } from "../components/infoComponents/GamingTokenDaoInfoComponent";

export default function Page() {
    return (
        <>
            <LottoContainer />
            <RapidlottoInfoComponent />
            <TimelineInfoComponent />
            <GamingTokenDaoInfoComponent />
        </>
    )
}
