import { Button, message } from "antd" 
import { getService } from "../utils/service"

export const DemoPage1 = () => {

    const demoTest = () => {
        getService('/demo/demoTest').then(response => {
            console.log(response);
        }).catch(error => message.alert(error?.response?.data?.message ?? error.message))
    }

    return (
    <div>
        <Button onClick={() => demoTest()} type="primary">test data</Button>
    </div>)
}