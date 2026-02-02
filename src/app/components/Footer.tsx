


export default function Footer() {

    const year = new Date().getFullYear()

    return(
        <footer className="w-full h-16  text-spaceIndigo font-bold flex flex-col items-center justify-center">
            <p className="text-[16px] md:text-2xl text-bronze">Designed and made by DT.</p>
            <p className="text-[12px] md:text-2xl mt-3">Copyright {year} Zoran Tepic . All rights reserved.</p>
        </footer>
    )
}