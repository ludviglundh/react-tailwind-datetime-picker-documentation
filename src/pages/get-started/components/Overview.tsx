import Title from 'components/Title'
import type { DocumentLink } from 'layouts/DocumentLayout'
import type { FC } from 'react'

interface OverviewProps {
  link: DocumentLink
}

const Overview: FC<OverviewProps> = ({ link }) => {
  return (
    <>
      <Title url={link.url}>{link.title}</Title>
      <span className="pt-4 dark:text-white/80">
        React Tailwind Datetime Picker is a highly customizable datetime picker
        build using tailwindcss and dayjs. It offers a config that allows you to
        pass in max- and minDate, disabled Dates, startDate and much more.
        <br />
        React Tailwind Datetime Picker also allows you to choose if you want to
        use date range, or a single Date, and you can choose to only display a
        single calendar if thats what you want to do.
        <br /> <br />
        React Tailwind Datetime Picker combines everything you need with a
        datepicker component, as well with a timepicker component for maximum
        usability, and of course you can choose to use the timepicker or not.
      </span>
    </>
  )
}
export default Overview
