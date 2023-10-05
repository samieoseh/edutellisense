import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PricingPlanPage() {
  return (
    <Container className="w-[90%]">
      <div className="flex justify-start w-full">
        <Image width={115} height={16} src="/Logo.svg" alt="logo.svg" />
      </div>
      <h1 className="mt-[3.4rem] font-extrabold text-center text-[2rem]">
        Choose the plan that fits your need
      </h1>
      <div className="lg:flex lg: gap-4">
        {/* Basic Plan */}
        <div className="w-[16rem] shadow-lg rounded-lg mt-[3.38rem]">
          <h3 className="text-center font-bold uppercase text-[1rem] mt-[1.75rem]">
            Basic
          </h3>
          <div className=" mx-[1.37rem]">
            <p className="text-xs mt-[0.44rem]">
              Suitable for personal use and exploration of the platform
            </p>
            <h2 className="text-3xl font-bold mt-[1.2rem]">
              <sup className="text-xs">$</sup>0
            </h2>
            <div className="mt-[1.3rem]">
              <div className="border-b flex justify-start pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">Data visualization</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">2GB Data storage</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">2 User accounts</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">10 Data exports</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">Basic analytics</p>
              </div>
            </div>
            <Button className="w-full mt-[1.3rem] mb-8">Get Started</Button>
          </div>
        </div>
        {/* Standard Plan */}
        <div className="w-[16rem] shadow-lg rounded-lg mt-[3.38rem]">
          <h3 className="text-center font-bold uppercase text-[1rem] mt-[1.75rem]">
            Standard
          </h3>
          <div className=" mx-[1.37rem]">
            <p className="text-xs mt-[0.44rem]">
              Perfect for professionals and small businesses in need of enhanced
              data visualization
            </p>
            <h2 className="text-3xl font-bold mt-[1.2rem]">
              <sup className="text-xs">$</sup>80
            </h2>
            <div className="mt-[1.3rem]">
              <div className="border-b flex justify-start pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">Data visualization</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">15GB Data storage</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">10 User accounts</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">50 Data exports</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image src="/good.svg" height={14} width={14} alt="good.svg" />
                <p className="ml-2 text-sm">Advanced analytics</p>
              </div>
            </div>
            <Button className="w-full mt-[1.3rem] mb-8">Get Started</Button>
          </div>
        </div>
        {/* Premium Plan */}
        <div className="w-[16rem] shadow-lg rounded-lg mt-[3.38rem] bg-[#000536] relative overflow-hidden">
          <Image
            src="/flare.png"
            height={159}
            width={216}
            alt="flare.png"
            className="absolute -top-4 -left-4 z-10"
          />
          <h3 className="z-40 text-center font-bold uppercase text-[1rem] mt-[1.75rem] text-white">
            Premium
          </h3>
          <div className=" mx-[1.37rem] z-40">
            <p className="text-xs mt-[0.44rem] text-white">
              Perfect for large business that have hige amount of data
            </p>
            <h2 className="text-3xl font-bold mt-[1.2rem] text-white">
              <sup className="text-xs text-white">$</sup>80
            </h2>
            <div className="mt-[1.3rem]">
              <div className="border-b flex justify-start pb-[0.6rem]">
                <Image
                  src="/good-white.svg"
                  height={14}
                  width={14}
                  alt="good-white.svg"
                />
                <p className="ml-2 text-sm text-white">Data visualization</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image
                  src="/good-white.svg"
                  height={14}
                  width={14}
                  alt="good-white.svg"
                />
                <p className="ml-2 text-sm text-white">15GB Data storage</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image
                  src="/good-white.svg"
                  height={14}
                  width={14}
                  alt="good-white.svg"
                />
                <p className="ml-2 text-sm text-white">10 User accounts</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image
                  src="/good-white.svg"
                  height={14}
                  width={14}
                  alt="good-white.svg"
                />
                <p className="ml-2 text-sm text-white">50 Data exports</p>
              </div>
              <div className="border-b flex justify-start mt-4 pb-[0.6rem]">
                <Image
                  src="/good-white.svg"
                  height={14}
                  width={14}
                  alt="good-white.svg"
                />
                <p className="ml-2 text-sm text-white">Advanced analytics</p>
              </div>
            </div>
            <Button className="w-full mt-[1.3rem] mb-8">Get Started</Button>
          </div>
          <Image
            src="/flare 2.png"
            height={159}
            width={216}
            alt="flare.png"
            className="absolute -bottom-12 -right-12 z-10"
          />
        </div>
      </div>
    </Container>
  );
}
