import './staffmanual.css';

function StaffManual() {
  return (
    <div id="container">
      <div className="handbok-container">

        <div className="handbok-column-1">
          <div className="handbok-sidebar">
            <nav className="handbok-sidebar-local-nav">
              <ul className="handbok-menu">
                <li><strong>Håndboka</strong></li>
                <li><a href="#handbok-arbeidstid">Arbeidstid</a></li>
                <li><a href="#handbok-arbeidststed">Arbeidssted</a></li>
                <li><a href="#handbok-betingelser">Betingelser</a></li>
                <li><a href="#handbok-timeforing">Timeføring</a></li>
                <li><a href="#handbok-medeier">Medeier</a></li>
                <li><a href="#handbok-other">Alt annet + kontoret</a></li>
                <li><a href="#handbok-militaer">Militærtjeneste</a></li>
                <li><a href="#handbok-kommunikasjon">Slack og epost</a></li>
              </ul>
            </nav>

            <nav className="handbok-sidebar-more">
              <ul>
                <li><a href="/handbok/ansettelse.html">&rarr; Ansettelse</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="handbok-column-2">
          <section className="handbok">
            <header className="customer-header">
              <p>This document serves as a staff handbook for Kodeworks employees. We aim to describe how we do things and how we think. In this document you will find information about working hours, holiday pay, salary, benefits and much more. This is a document we want all employees to contribute to, and have ownership of.</p>
            </header>
          </section>

          <section className="handbok" id="handbok-arbeidstid">
            <h2>Working Time</h2>

            <p>Contractual working hours are 8 hours per day, with a 30-minute lunch break. In Kodeworks, we operate with a core time in the period 9-15, with the opportunity and room to be able to be flexible during working hours. In a company where competence is our main product, we know that working closely with our colleagues will give the best results. We also know that everyday life can offer other things that mean that at times you need to adapt your working hours outside the core hours.</p>

            <p>As consultants, we must nevertheless take into account that our customers have their own core time, and any changes here you must coordinate with your project and / or your human resources manager.</p>

            <article>
              <h3>Vaycation</h3>

              <p>We run regular 5-week paid vacation.</p>

              <p>It is often the case that the project you are on wants you to take the holiday at certain times, typically the joint holiday, Easter, Christmas, autumn / winter holiday overlapping with school / kindergarten, etc. We try to adapt to this, but understand that it is not always doable.</p>

              <p>When you go on holiday, just follow this checklist:</p>

              <ol>
                <li>Report to the nearest manager</li>
                <li>Talk to the customer to get it cleared</li>
                <li>Put it in the calendar</li>
                <li>Enter it in the timekeeping system</li>
              </ol>

              <p>We follow the legislation and Tekna according to what are the holidays. That is, Christmas Eve and New Year\'s Eve are ordinary days.</p>
            </article>
          </section>

          <section className="handbok" id="handbok-arbeidssted">
            <h2>Workplace</h2>
            <p>As a consultant, it often happens that we work where the customer is located. We at Kodeworks aim to find assignments that are not too far from the ordinary workplace.</p>

            <p>For assignments that entail greater costs and a significantly longer journey than to a normal workplace, Kodeworks will cover these expenses.</p>

            <p>For example, this will be with longer assignments outside zone A in Trondheim or zone 1 in Oslo.</p>
          </section>

          <section className="handbok" id="handbok-betingelser">
            <h2>Conditions</h2>

            <p>We want all our employees to feel as good as possible at work by offering the necessary freedom, security and stability in everyday life. At the same time, it is also important to get the tools you need to be able to do your job in the best possible way.</p>

            <article>
              <h3>Payment</h3>

              <p>At Kodeworks, we do not want the salary to be a factor you have to think about. At the same time, it is important to have a good salary in order to have the freedom and stability we want all our employees to have. Therefore, have no individual salary assessments. As an employee, you should not have to ask for what you deserve. It should come automatically. We have chosen a salary model that gives everyone equal pay based on, among other things, the number of years of experience. All Kodeworks employees have an overview of what the others earn. An overview of the current salary level and background figures for salary adjustment can be found in the "Lønn" folder on Google Drive.</p>

              <p>Salary is paid no later than the 22nd of each month. If the 22nd is on a public holiday, it must be paid so that the employee receives pay before the 22nd.</p>
            </article>

            <article>
              <h3>Holiday Pay</h3>

              <p>Holiday pay is paid in June. All holidays, 25 days, will be deducted this month. June usually does not have 25 working days, so the remaining holidays are deducted correspondingly from the holiday pay. Employees who have started after the New Year will not have any accrued holiday pay, and will be deducted (further) in the following month of July (so that there will be a 25-day deduction in total). If you want to be paid the holiday pay at another time, this can be done by agreement with the finance department. For practical reasons, it is a good idea to notify this in good time before you want payment.</p>
            </article>

            <article>
              <h3>Overtime Allowance</h3>
              <p>From time to time you may need to work a few extra hours a week. This mainly applies for hectic periods during a project for a customer. Beyond this, it is desirable to keep overtime work to a minimum. We believe that the employee\'s free time should be respected and that you would rather perform better the hours you are at work if you have had sufficient rest. Therefore, you decide completely if you want to work overtime.</p>
              <p>The overtime pay can be calculated by dividing the annual salary by 1950 hours, and then adding 40%.</p>
              <p>Overtime work must always be clarified with the personnel manager first unless otherwise agreed.</p>
            </article>

            <article>
              <h3>Pension and Insurance</h3>

              <p>Kodeworks sets aside 7% in pension savings. This applies from 0 to 12G.</p>

              <p>In addition to regular business travel and occupational injury insurance, we have travel insurance that covers leisure travel for you and your family. We also have treatment insurance that ensures that you get fast and good treatment if something should happen. This also includes free access to doctor\'s appointments on mobile.</p>

              <p>We use Gjensidige for both pension and insurance, and each employee can log in to Gjensidige and see their profile and details about this. A short guide on how to get an overview of your own insurance in Gjensidige can be found in the "Forsikring" folder on Google Drive.</p>
            </article>

            <article>
              <h3>Computer and Software</h3>

              <p>We cover the computer and software you need to do your job. What you choose is up to you. Kodeworks\' laptop fleet now includes Dell XPS 15, MacBook Pro and Christian\'s gaming laptop. If at some point the computer is not good enough to do the work tasks as efficiently as possible, it\'s time for a new one.</p>

              <p>If you need software to do your job, such as IDEA, you buy this directly and keep an outlay.</p>
            </article>

            <article>
              <h3>Literature and Other Learning Materials</h3>
              <p>To help quench the thirst for knowledge, there are countless sources. If you want to take advantage of e-learning offers such as Pluralsight, Coursera or similar, just sign up for this. Books in all shapes and forms are also free to buy. After all, it is knowledge we live by! The expenses are reimbursed.</p>
            </article>

            <article>
              <h3>Course and Conference</h3>
              <p>Kodeworks encourages you to attend courses and conferences. In 2018, we all went to JavaZone, but it is to be expected that the employees\' interests and wishes for professional replenishment can best be satisfied in other places as well. If you want to go to courses or conferences several times a year, or to go to places that entail greater costs than, for example, JavaZone, this requires the approval of the human resources manager.</p>

              <p>If you contribute to giving lectures, courses or the like, Kodeworks will cover this within reasonable limits.</p>
            </article>

            <article>
              <h3>Health</h3>
              <p>Our occupational group is very exposed to stress injuries, which can be avoided by facilitating a good physical work environment. If you sit outside with a customer and feel that, for example, a table, screen or chair is not good enough, we will make sure to improve this. It should not be necessary to let such things go at the expense of health.</p>

              <p>We also want to make arrangements for you to be physically active. In Trondheim, Kodeworks has a corporate agreement with 3T. Here, several Kodeworks employees play weekly squash. You do not need to use this if you want to train elsewhere. We cover a similar subscription with other providers as well. In Oslo, there is no separate company agreement, so there you just have to find a similar subscription and we will arrange it.</p>
            </article>

            <article>
              <h3>Benefits</h3>

              <p>In order for you as an employee to have a flexible, safe and predictable everyday life, Kodeworks has a number of benefits. With the exception of benefits that are to be entered in the time registration system, such as parental leave and care leave, expenses for everything else are registered as employee expenses and will be reimbursed on the next salary payment.</p>

              <p>Periodic expenses such as broadband and membership at the fitness center must be registered monthly. In the event of varying expenses, it is your responsibility as an employee not to exceed 12 times the maximum monthly amount for the relevant benefit in the current year.</p>

              <ul>
                <li>Mobile phone + subscription.</li>
                <li>Broadband is covered by up to NOK 500 per month.</li>
                <li>Membership with 3T (Trondheim) is covered through our corporate agreement, or a corresponding subscription with other providers (Oslo & Trondheim).</li>
                <li>Other necessary electronics to perform the work. For example, mobile phone, monitor or computer mouse.</li>
                <li>2 weeks paid care leave at birth.</li>
                <li>Full pay during parental leave.</li>
              </ul>
            </article>

            <article>
              <h3>Welfare Leave</h3>
              <p>In order to help make both planned and unforeseen events in everyday life a little easier to handle, Kodeworks provides the following welfare benefits in addition to what is required by law:</p>

              <ul>
                <li>Examination by a doctor or dentist.</li>
                <li>Accompany children to the first day of school or kindergarten (up to 1 day).</li>
                <li>Leave for the rest of the working day if you become ill during the day and have to leave the workplace.</li>
                <li>Short leave due to illness in the home.</li>
                <li>Short leave when spouse / cohabitant / partner is about to give birth.</li>
                <li>Deaths and funerals for close relatives (up to 5 days).</li>
                <li>To donate blood.</li>
                <li>Relocation (up to 1 day a year).</li>
                <li>Wedding (up to 1 day).</li>
                <li>Drive up to driver\'s license.</li>
              </ul>
            </article>
          </section>

          <section className="handbok" id="handbok-timeforing">
            <h2>Timekeeping</h2>
            <p>Timekeeping is unfortunately required in most consulting companies, and Kodeworks is no exception. Fortunately, like most other consulting companies, we have created our own timekeeping tool to make the process easier. In the timekeeping tool, you enter work-related time, ie billable time on various projects, illness, vacation, leave, etc. The hours are delivered by the last working day of the month.</p>
            <p>A working day in the timekeeping tool is 8 hours. This means that holidays, welfare leave and internal initiatives must be taken with 8 hours per day. For customer projects, it will usually be 7.5 hours, unless the contract indicates that we can invoice currently spent on the lunch break. You will be informed of this before the project starts.</p>
            <p>You may also have to keep hours in the customer\'s own system. There will probably be other rules for when and how this is to be done.</p>
          </section>

          <section className="handbok" id="handbok-medeier">
            <h2>Co-Owner</h2>
            <p>The position also facilitates that employees can become co-owners. We believe that employees who have co-ownership get stronger incentives to create growth and well-being in the company, which benefits everyone. Co-ownership will be distributed from a pool of shares owned by the company or parent company. The shares are bought and sold at cost price. Upon share purchase, the employee joins the company\'s shareholder agreement.</p>
            <p>All employees will be offered shares after they have been hired as consultants for three months. Since this requires some administration and signatures of all existing shareholders, we do this every six months (June 1 and December 1). We recommend everyone to read up on the topic before the process begins, although of course we must also answer all questions to the best of our ability.</p>
          </section>

          <section className="handbok" id="handbok-other">
            <h2>Everything Else + The Office</h2>
            <p>At our office at Fjordgata 30 in Trondheim, you have access to a workplace, printer, scanner, pinball machine, coffee and other refreshments. In Oslo, we have an office in Grønnegata 10 at Majorstuen. Here you also have access to a workplace, coffee machine, meeting rooms, etc. You use the premises at your own disposal on a daily basis when you do not have the opportunity to work from the custumer´s premises.</p>
          </section>

          <section className="handbok" id="handbok-militaer">
            <h2>Military Service</h2>
            <p>Summons to military service, including first-time service, which requires leave from work, is notified to the personnel manager and placed in the calendar. For compulsory service in the Armed Forces, the Home Guard, the Civil Defense and the Police Reserve, up to one month is paid full salary per. years with deduction of all military supplements such as salary, unemployment benefits, etc. For voluntary service in the Home Guard, leave without pay is granted. First-time military service is granted unpaid leave. Repetition exercises that last longer than four weeks must be arranged separately.</p>
          </section>

          <section className="handbok" id="handbok-kommunikasjon">
            <h2>Slack og epost</h2>
            <p>Mye av den daglige kommunikasjon foregår på Slack, noe som er å foretrekke. Her er det lav takhøyde så det er bare å slå seg løs! Skulle det være fristende med en øl, runde squash eller litt Fortnite så finner du folka her.</p>
            <p>Hvis man har behovet for å være litt mer formell, er det naturlig å sende epost.</p>
            <p>Jobbrelatert kommunikasjon bør begrenses til innenfor arbeidstiden.</p>
          </section>


          <section>
            <h2>Appointment</h2>
            <p>An employment is an important investment for Kodeworks. The employees are not only employees who will contribute to a good working environment, but are also the actual product Kodeworks delivers. There is therefore a great focus on hiring skilled employees who seek and master challenges. The employees represent Kodeworks.</p>
          </section>

          <section>
            <h2>Process and Onboarding</h2>
            <p>At Kodeworks, we want you as a new employee to feel that the process from the time you contact us until the contract is signed and the employment relationship has started is a good experience.</p>

            <h3>Recruitment Manager</h3>
            <ul>
              <li>Create user in Google Suite.</li>
              <li>Create a CV and invite the new employee to start filling it out.</li>
              <li>Coordinate photo shoots for CV.</li>
              <li>Invite the new employee to a social event in Kodeworks.</li>
              <li>Order equipment (computer etc.).</li>
              <li>Assign sponsor.</li>
              <li>Follow up the Administration\'s tasks.</li>
            </ul>

            <h3>Administration</h3>
            <ul>
              <li>Order a telephone subscription.</li>
              <li>Register a new employee in Tripletex.</li>
              <li>Enrol new employees in insurance and pensions.</li>
              <li>Create user in WerkzTime.</li>
            </ul>

            <h3>Sponsor (fadder)</h3>
            <p>Organize start-up day:</p>
            <ul>
              <li>Coordinate place and time. Lunch at the house, feel free to invite with other colleagues.</li>
              <li>Give an introduction to how employee expenses and other accounting matters work.</li>
              <li>Give an introduction to how WerkzTime works.</li>
              <li>Invite the new employee to a social event in Kodeworks.</li>
              <li>Invite to Slack.</li>
              <li>Invite to GitLab.</li>
              <li>Invite to GitHub.</li>
              <li>Follow up porting of telephone subscriptions.</li>
            </ul>

            <p>
              <strong>At start-up with sponsor</strong>
            </p>
            <ul>
              <li>Update CV.</li>
              <li>Prepare for customer project.</li>
            </ul>
          </section>

          <section>
            <h2>Probation</h2>
            <p>New full-time employees have a probationary period of six months from the date of accession. The probationary period is reciprocal and shall entail the possibility for both the employer and the employee to terminate the employment relationship if it turns out that the circumstances were not as intended. During the probationary period, one month\'s notice period applies. The probationary period can be extended if the employee has been absent during the probationary period, this includes holidays. The probationary period can be shortened by further agreement between the employer and the employee.</p>
          </section>

          <section>
            <h2>Job types</h2>
            <p>Kodeworks operates with different job types.</p>

            <h3>Newly hired</h3>
            <p>The position lasts until the probationary period (6 months) and until you have been on assignment with a customer for 3 months and are on assignment further, after which you move up to Consultant. The tasks as a new employee are mainly:</p>
            <ul>
              <li>Work actively with offers.</li>
              <li>Professional development.</li>
              <li>Assist on ongoing projects, off-site or on-site.</li>
            </ul>

            <h3>Consultant</h3>
            <p>As a consultant, you usually spend most of your working time on behalf of clients.</p>
            <p>Promotion to senior consultant is assessed annually by a joint board, based on the following criteria:</p>
            <ul>
              <li>Renewable assignments. Ability to sell themselves on extensions of their customer project.</li>
              <li>Can draw in others on assignments. Sees opportunities to sell colleagues on the same customer project as himself.</li>
              <li>Get new leads. Is observant at the customer and picks up signals about other projects. Facilitates dialogue between Kodeworks and customer. Follows their network on possible projects with other customers.</li>
              <li>Available at a higher hourly rate. Has a CV and profile that is salable at hourly rates up to the upper tier of what the market will pay. Note that Kodeworks may have other incentives for not offering the consultant at a high rate; the consultant can still be considered “salable at a higher hourly rate”.</li>
              <li>Total work experience. Number of years with relevant professional experience.</li>
              <li>Professional contribution. Contributes to Kodeworks\' internal and customer-specific professional programs. Promotes professional development, brings colleagues to professional events, possibly arranges professional happenings.</li>
              <li>Social contributions. Promotes corporate sports, social gatherings and excursions. Ability to create space for everyone to participate.</li>
              <li>Must be able to be sold out as a senior. Holds a resume and character that is easy to convince customers that is a senior profile.</li>
            </ul>

            <h3>Senior</h3>
            <p>An independent and experienced consultant with high professional skills and who is able to communicate well with colleagues, management and customers. By the way, all the points for promotion to senior under consultant, above.</p>

            <h3>Staff</h3>
            <p>Approximately 10% of the total number of hours in Kodeworks will go to staff-related work within administration, management, follow-up of employees and sales. The staff\'s task is to ensure that the machinery runs properly; that there is a steady influx of professionally interesting assignments, that the employees are well, that the customers are satisfied with Kodeworks, that the company\'s finances are going as they should, that the company reaches its measurement parameters, and more.</p>
          </section>

          <section>
            <h2>Resignation</h2>

            <p>Termination must be in writing. The notice period is mutual for employees and employers with a duration of three months. It runs from the first day of the month after the termination took place unless otherwise agreed.</p>
            <p>Employees who leave must return handed out material. Exceptions can be made if the handed out material is not considered to have any useful value for Kodeworks, for example a PC and / or mobile phone. Kodeworks does not feel compelled to confiscate equipment that cannot be easily converted into cash or used by other employees.</p>
            <p>If you have accumulated co-ownership in the company, shares must also be redeemed in accordance with the shareholder agreement.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default StaffManual;
