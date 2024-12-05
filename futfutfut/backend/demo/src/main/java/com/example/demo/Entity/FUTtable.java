package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class FUTtable {
	
	  public FUTtable() {
	    }
	@Id
	private Long sofifa_id;

	private String shortName;

	private String longName;

	private Integer overall;

	private String clubName;

	private String leagueName;

	private String clubPosition;

	private Integer clubJerseyNumber;

	private String nationalityName;

	private Integer pace;
	private Integer shooting;
	private Integer passing;
	private Integer dribbling;
	private Integer defending;
	private Integer physic;


	private Integer goalkeepingDiving;
	private Integer goalkeepingHandling;
	private Integer goalkeepingKicking;
	private Integer goalkeepingPositioning;
	private Integer goalkeepingReflexes;
	private Integer goalkeepingSpeed;


	private String playerFaceUrl;
	private String clubLogoUrl;
	private String clubFlagUrl;
	private String nationLogoUrl;
	private String nationFlagUrl;
	
	
	public Long getSofifa_id() {
		return sofifa_id;
	}
	public void setSofifa_id(Long sofifa_id) {
		this.sofifa_id = sofifa_id;
	}
	public String getShortName() {
		return shortName;
	}
	public void setShortName(String shortName) {
		this.shortName = shortName;
	}
	public String getLongName() {
		return longName;
	}
	public void setLongName(String longName) {
		this.longName = longName;
	}
	public int getOverall() {
		return overall;
	}
	public void setOverall(int overall) {
		this.overall = overall;
	}
	public String getClubName() {
		return clubName;
	}
	public void setClubName(String clubName) {
		this.clubName = clubName;
	}
	public String getLeagueName() {
		return leagueName;
	}
	public void setLeagueName(String leagueName) {
		this.leagueName = leagueName;
	}
	public String getClubPosition() {
		return clubPosition;
	}
	public void setClubPosition(String clubPosition) {
		this.clubPosition = clubPosition;
	}
	public Integer getClubJerseyNumber() {
		return clubJerseyNumber;
	}
	public void setClubJerseyNumber(Integer clubJerseyNumber) {
		this.clubJerseyNumber = clubJerseyNumber;
	}
	public String getNationalityName() {
		return nationalityName;
	}
	public void setNationalityName(String nationalityName) {
		this.nationalityName = nationalityName;
	}
	public Integer getPace() {
		return pace;
	}
	public void setPace(Integer pace) {
		this.pace = pace;
	}
	public Integer getShooting() {
		return shooting;
	}
	public void setShooting(Integer shooting) {
		this.shooting = shooting;
	}
	public Integer getPassing() {
		return passing;
	}
	public void setPassing(Integer passing) {
		this.passing = passing;
	}
	public Integer getDribbling() {
		return dribbling;
	}
	public void setDribbling(Integer dribbling) {
		this.dribbling = dribbling;
	}
	public Integer getDefending() {
		return defending;
	}
	public void setDefending(Integer defending) {
		this.defending = defending;
	}
	public Integer getPhysic() {
		return physic;
	}
	public void setPhysic(Integer physic) {
		this.physic = physic;
	}
	public Integer getGoalkeepingDiving() {
		return goalkeepingDiving;
	}
	public void setGoalkeepingDiving(Integer goalkeepingDiving) {
		this.goalkeepingDiving = goalkeepingDiving;
	}
	public Integer getGoalkeepingHandling() {
		return goalkeepingHandling;
	}
	public void setGoalkeepingHandling(Integer goalkeepingHandling) {
		this.goalkeepingHandling = goalkeepingHandling;
	}
	public Integer getGoalkeepingKicking() {
		return goalkeepingKicking;
	}
	public void setGoalkeepingKicking(Integer goalkeepingKicking) {
		this.goalkeepingKicking = goalkeepingKicking;
	}
	public Integer getGoalkeepingPositioning() {
		return goalkeepingPositioning;
	}
	public void setGoalkeepingPositioning(Integer goalkeepingPositioning) {
		this.goalkeepingPositioning = goalkeepingPositioning;
	}
	public Integer getGoalkeepingReflexes() {
		return goalkeepingReflexes;
	}
	public void setGoalkeepingReflexes(Integer goalkeepingReflexes) {
		this.goalkeepingReflexes = goalkeepingReflexes;
	}
	public Integer getGoalkeepingSpeed() {
		return goalkeepingSpeed;
	}
	public void setGoalkeepingSpeed(Integer goalkeepingSpeed) {
		this.goalkeepingSpeed = goalkeepingSpeed;
	}
	public String getPlayerFaceUrl() {
		return playerFaceUrl;
	}
	public void setPlayerFaceUrl(String playerFaceUrl) {
		this.playerFaceUrl = playerFaceUrl;
	}
	public String getClubLogoUrl() {
		return clubLogoUrl;
	}
	public void setClubLogoUrl(String clubLogoUrl) {
		this.clubLogoUrl = clubLogoUrl;
	}
	public String getClubFlagUrl() {
		return clubFlagUrl;
	}
	public void setClubFlagUrl(String clubFlagUrl) {
		this.clubFlagUrl = clubFlagUrl;
	}
	public String getNationLogoUrl() {
		return nationLogoUrl;
	}
	public void setNationLogoUrl(String nationLogoUrl) {
		this.nationLogoUrl = nationLogoUrl;
	}
	public String getNationFlagUrl() {
		return nationFlagUrl;
	}
	public void setNationFlagUrl(String nationFlagUrl) {
		this.nationFlagUrl = nationFlagUrl;
	}

	
	
	
}
