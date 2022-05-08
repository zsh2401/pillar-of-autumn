import HVCenter from "@pillar-of-autumn/app/components/HVCenter";
import { useCallback, useEffect, useState } from "react"
import AppIcon from "@pillar-of-autumn/app/components/AppIcon";
import useTranslator from "@pillar-of-autumn/app/hooks/useTranslator";
import { ProgressIndicator, Spinner, SpinnerSize } from "@fluentui/react";
import { Stage } from "@pillar-of-autumn/app/util/loadApp";
import { useNavigate } from "react-router";
import useAppContext from "@pillar-of-autumn/app/hooks/useAppContext";
import useSavedState from "@pillar-of-autumn/app/hooks/useSavedState";

export default function () {

    const t = useTranslator()
    const navigate = useNavigate()

    const appContext = useAppContext();


    return <HVCenter style={{
        textAlign: "center",
    }}>
        <AppIcon size={180}/>
        {/* <h1 style={{marginTop:"20px"}}>{t("app_name")}</h1> */}
        <br /><br />
        <ProgressIndicator/>
        {/* <Spinner style={{ marginTop: "60px" }} size={SpinnerSize.large} /> */}
    </HVCenter>
}