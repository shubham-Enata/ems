import Sprint_loader_Blue from "../assets/Images/Sprint-Loader-Jr-blue.png";
import Sprint_loader_Gray from "../assets/Images/Sprint-Loader-Jr-grey.png";
import Sprint_loader_Green from "../assets/Images/Sprint-Loader-Jr-green.png";

import SprintJrBlue from '../assets/Images/Sprint-Jr-blue.png'
import SprintJrGray from '../assets/Images/Sprint-Jr-grey.png'
import SprintJorange from '../assets/Images/Sprint-Jr-orange.png'

import CommandoGreen from '../assets/Images/commando-Jr-green.png'
import CommandoGray from '../assets/Images/commando-Jr-grey.png'
import CommandoSilver from '../assets/Images/commando-Jr-silver-matte.png'


export const vehiclesData = {
    "Sprint Jr": {
        images: {
            blue: SprintJrBlue,
            orange: SprintJorange,
            gray: SprintJrGray,
        },
        specs: {
            structure: [
                { label: "Model", value: "Sprint Jr" },
                { label: "Seating Capacity", value: "D+4" },
                { label: "Body Type", value: "Metal" },
                { label: "Roof Type", value: "Soft Top" },
                { label: "Chassis", value: "Sturdy Boron Steel Chassis" },
            ],
            dimension: [
                { label: "Dimensions- LxWxH", value: "2760 x 995 x 1780" },
                { label: "Wheel Base", value: "1120 mm" },
                { label: "Ground Clearance", value: "220 mm" },
                { label: "Kerb weight", value: "390 Kgs" },
                { label: "GVW", value: "740 Kgs" },
            ],
            drivechain: [
                { label: "Peak Speed (Watt)", value: "1950 watt" },
                { label: "Peak Torque (Nm)", value: "19 Nm" },
            ],
            performance: [
                { label: "Top Speed", value: "25 Km/hr" },
                { label: "Certified Range", value: "120 Kms" },
                { label: "Drive Mode", value: "Single speed" },
            ],

            // ✅ Updated 2nd slide sections
            comfort: [
                { label: "Windshield glass with wiper Motor", value: "Yes" },
                { label: "Spare Wheel Provision", value: "Yes" },
                { label: "Mobile charger", value: "Yes" },
                { label: "Rear view Camera", value: "Yes" },
                { label: "Music System", value: "Yes" },
            ],
            safety: [
                { label: "Suspensions- Front", value: "Telescopic with shock absorber with coil spring" },
                { label: "Suspensions- Rear", value: "Shock absorber with Leaf spring" },
                { label: "Brakes- Front/Rear", value: "Hydraulic Brake system" },
                { label: "Tyre size front/Rear", value: "4.50 x 10" },
            ],
            battery: [
                { label: "Battery Type", value: "Lithium" },
                { label: "Battery Capacity", value: "105 Ah" },
                { label: "Charger Type", value: "48 V/26 Amp" },
            ],
            warranty: [
                { label: "Vehicle Warranty", value: "One Year" },
                { label: "Battery Warranty", value: "3 Years" },
                { label: "Extended Warranty", value: "2 years*" },
            ],
        }

    },
    "Sprint Loader Jr": {
        images: {
            blue: Sprint_loader_Blue,
            gray: Sprint_loader_Gray,
            green: Sprint_loader_Green,
        },
        specs: {
            structure: [
                { label: "Model", value: "Sprint Loader Jr" },
                { label: "Seating Capacity", value: "Cargo" },
                { label: "Body Type", value: "Metal" },
                { label: "Roof Type", value: "Hard Top" },
                { label: "Chassis", value: "Sturdy Boron Steel Chassis" },
            ],
            dimension: [
                { label: "Dimensions- LxWxH", value: "2760 x 995 x 1780" },
                { label: "Wheel Base", value: "1120 mm" },
                { label: "Ground Clearance", value: "220 mm" },
                { label: "Kerb weight", value: "390 Kgs" },
                { label: "Pay load", value: "450 Kgs" },
                { label: "GVW", value: "840 Kgs" },
            ],
            drivechain: [
                { label: "Peak Speed (Watt)", value: "1950 watt" },
                { label: "Peak Torque (Nm)", value: "19 Nm" },
            ],
            performance: [
                { label: "Top Speed", value: "25 Km/hr" },
                { label: "Certified Range", value: "120 Kms" },
                { label: "Drive Mode", value: "Single speed" },
            ],
            comfort: [
                { label: "Windshield glass with wiper Motor", value: "Yes" },
                { label: "Spare Wheel Provision", value: "Yes" },
                { label: "Mobile charger", value: "Yes" },
                { label: "Rear view Camera", value: "Yes" },
                { label: "Music System", value: "Yes" },
            ],
            safety: [
                { label: "Suspensions- Front", value: "Telescopic with shock absorber with coil spring" },
                { label: "Suspensions- Rear", value: "Shock absorber with Leaf spring" },
                { label: "Brakes- Front/Rear", value: "Hydraulic Brake system" },
                { label: "Tyre size front/Rear", value: "4.50 x 10" },
            ],
            battery: [
                { label: "Battery Type", value: "Lithium" },
                { label: "Battery Capacity", value: "105 Ah" },
                { label: "Charger Type", value: "48 V/26 Amp" },
            ],
            warranty: [
                { label: "Vehicle Warranty", value: "One Year" },
                { label: "Battery Warranty", value: "3 Years" },
                { label: "Extended Warranty", value: "2 years*" },
            ],
        }

    },
    "Commando Jr": {
        images: {
            green: CommandoGreen,
            gray: CommandoGray,
            silver: CommandoSilver,
        },
        specs: {
            structure: [
                { label: "Model", value: "Commando Jr" },
                { label: "Seating Capacity", value: "Cargo" },
                { label: "Body Type", value: "Metal" },
                { label: "Chassis", value: "Sturdy Boron Steel Chassis" },
            ],
            dimension: [
                { label: "Dimensions- LxWxH", value: "2300 x 995 x 1380" },
                { label: "Wheel Base", value: "1120 mm" },
                { label: "Ground Clearance", value: "220 mm" },
                { label: "Kerb weight", value: "190 Kgs" },
                { label: "Pay load", value: "310 Kgs" },
                { label: "GVW", value: "500 Kgs" },
            ],
            drivechain: [
                { label: "Peak Speed (Watt)", value: "1950 watt" },
                { label: "Peak Torque (Nm)", value: "19 Nm" },
            ],
            performance: [
                { label: "Top Speed", value: "25 Km/hr" },
                { label: "Certified Range", value: "150 Kms" },
                { label: "Drive Mode", value: "Single speed" },
            ],
            comfort: [
                { label: "Windshield glass with wiper Motor", value: "Yes" },
                { label: "Mobile charger", value: "Yes" },
                { label: "Music System", value: "Yes" },
            ],
            safety: [
                { label: "Suspensions- Front", value: "43 mm telescopic shock absorber" },
                { label: "Suspensions- Rear", value: "Shock absorber with Leaf spring" },
                { label: "Brakes- Front/Rear", value: "Mechanical Brake system" },
                { label: "Tyre size front/Rear", value: "3.75 x 12" },
            ],
            battery: [
                { label: "Battery Type", value: "Lithium" },
                { label: "Battery Capacity", value: "105 Ah" },
                { label: "Charger Type", value: "48 V/26 Amp" },
            ],
            warranty: [
                { label: "Vehicle Warranty", value: "One Year" },
                { label: "Battery Warranty", value: "3 Years" },
            ],
        }

    },
    // Add more vehicles here if needed
};
